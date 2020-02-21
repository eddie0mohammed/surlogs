
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../Reducers/rootReducer';


const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    
    }catch(e){
        console.log(e)
    }
}

const loadFromLocalStorage = () => {
    
    try{

        const serializedState = localStorage.getItem('state');
        if (serializedState === null){
            return undefined;
        }else{
            return JSON.parse(serializedState)
        }

    }catch(e){
        console.log(e);
        return undefined;
    }
}



const persistedState = loadFromLocalStorage();

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(...middlewares)
))


store.subscribe(() => saveToLocalStorage(store.getState()));



export default store;