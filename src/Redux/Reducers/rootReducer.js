
import {combineReducers} from 'redux';

import dictionaryReducer from './dictionaryReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import soundReducer from './soundReducer';


const rootReducer = combineReducers({

    dic: dictionaryReducer,
    modal: modalReducer,
    auth: authReducer,
    sound: soundReducer

})

export default rootReducer;