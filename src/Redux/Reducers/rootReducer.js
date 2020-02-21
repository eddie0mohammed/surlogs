
import {combineReducers} from 'redux';

import dictionaryReducer from './dictionaryReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({

    dic: dictionaryReducer,
    modal: modalReducer,
    auth: authReducer

})

export default rootReducer;