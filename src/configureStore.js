import { createStore, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk';
import api from './services';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk.withExtraArgument(api), loggerMiddleware)
    )
}