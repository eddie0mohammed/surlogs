
import {combineReducers} from 'redux';

import dictionaryReducer from './dictionaryReducer';
import modalReducer from './modalReducer';


const rootReducer = combineReducers({

    dic: dictionaryReducer,
    modal: modalReducer

})

export default rootReducer;