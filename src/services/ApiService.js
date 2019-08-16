// fetch
// тут сделать подставку токена
import qs from 'qs'

const CONTENT_TYPE_JSON = 'application/json';

export function prepareQueryString(params) {
    return qs.stringify(params, {encode: false, arrayFormat: 'brackets'});
}

class ApiService {
    getLink(url, params) {
        return url + (params ? '?' + prepareQueryString(params) : '');
    }

    call(url, method, options = {}, params = null) {
        const headers = options.headers;
        for (let headerKey in (options.headers || {})) {
            if (options.headers.hasOwnProperty(headerKey)) {
                headers[headerKey] = options.headers[headerKey];
            }
        }
        options.headers = headers;
        options.method = method;
        options.credentials = 'include';

        return fetch(this.getLink(url, params), options)
            .then(response => {
                let result;
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes(CONTENT_TYPE_JSON)) {
                    result = response.json();
                } else {
                    result = response.text();
                }

                return Promise.all([result, response.status]);
            })
            .then(([data, status]) => {
                if (status >= 500 || [400, 401, 402, 403, 404].includes(status)) {
                    return Promise.reject(data);
                }

                if (status === 200) {
                    return (typeof data.data === 'undefined') ? data : data.data;
                } else {
                    return Promise.reject(data.error || data);
                }
            })
    }

    get(url, params = null, options = {}) {
        return this.call(url, 'GET', options, params);
    }

    post(url, data = null, options = {}) {
        if (data) {
            options.body = JSON.stringify(data);
            options.headers = {
                'Content-Type': CONTENT_TYPE_JSON,
            };
        }

        return this.call(url, 'POST', options)
    }

    delete(url) {
        return this.call(url, 'DELETE');
    }
}

export default new ApiService();