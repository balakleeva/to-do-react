import qs from 'qs';
import TokeService from './TokenService';

const { REACT_APP_API_PREFIX: API_PREFIX } = process.env;
const CONTENT_TYPE_JSON = 'application/json';

export function prepareQueryString(params) {
    return qs.stringify(params, { encode: false, arrayFormat: 'brackets' });
}

export function parseQueryString(queryString) {
    return qs.parse(queryString, { ignoreQueryPrefix: true });
}

class ApiService {

    constructor(apiPrefix, ts) {
        this.apiPrefix = apiPrefix;
        this.ts = ts;
    }

    getApiLink(link, params) {
        return this.apiPrefix + link + (params ? '?' + prepareQueryString(params) : '');
    }

    call(url, method = 'GET', options = {}, params = null) {
        const headers = options.headers || {};
        headers['X-Requested-With'] = 'XMLHttpRequest';

        if (this.ts.hasToken()) {
            headers['X-Auth'] = this.ts.getToken();
        }

        for (let headerKey in (options.headers || {})) {
            if (options.headers.hasOwnProperty(headerKey)) {
                headers[headerKey] = options.headers[headerKey];
            }
        }

        options.headers = headers;
        options.method = method;
        options.credentials = 'include';
        options.mode = 'cors';

        return fetch(this.getApiLink(url, params), options)
            .then(resp => {
                let result;
                const contentType = resp.headers.get('Content-Type');

                if (contentType && contentType.includes(CONTENT_TYPE_JSON)) {
                    result = resp.json();
                } else {
                    result = resp.text();
                }

                return Promise.all([result, resp.status]);
            })
            .then(([data, status]) => {
                if (status === 403 || (status === 401 && data.message === 'Unauthenticated.')) {
                    this.ts.removeToken();
                }

                if (status >= 500 || [400, 401, 402, 403, 404].includes(status)) {
                    return Promise.reject(data);
                }

                if (data.status === 'ok') {
                    return (typeof data.data === 'undefined') ? data : data.data;
                } else {
                    return Promise.reject(data.error || data);
                }
            });
    }

    get(url, params = null, options = {}) {
        return this.call(url, 'GET', options, params);
    }

    post(url, data = null, options = {}) {
        if (data) {
            options.body = JSON.stringify(data);
            options.headers = {
                'Content-Type': CONTENT_TYPE_JSON
            };
        }

        return this.call(url, 'POST', options);
    }

    put(url, data = null, options = {}) {
        if (data) {
            options.body = JSON.stringify(data);
            options.headers = {
                'Content-Type': CONTENT_TYPE_JSON
            };
        }

        return this.call(url, 'PUT', options);
    }

    upload(url, file, name) {
        const formData = new FormData();
        formData.append(name, file);

        const options = {
            body: formData
        };

        return this.call(url, 'POST', options);
    }

    delete(url) {
        return this.call(url, 'DELETE');
    }
}

export default new ApiService(API_PREFIX, TokeService);