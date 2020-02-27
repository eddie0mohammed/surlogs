
import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../Redux/Reducers/rootReducer';

import {middlewares} from '../Redux/Store/store';

export const storeFactory = (initialState) => {

    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlewares(rootReducer, initialState);
}