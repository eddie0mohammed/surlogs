
import {combineReducers} from 'redux';

import dictionaryReducer from './dictionaryReducer/dictionaryReducer';
import modalReducer from './modalReducer/modalReducer';
import authReducer from './authReducer/authReducer';
import soundReducer from './soundReducer/soundReducer';


const rootReducer = combineReducers({

    dic: dictionaryReducer,
    modal: modalReducer,
    auth: authReducer,
    sound: soundReducer

})

export default rootReducer;