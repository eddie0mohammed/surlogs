
import * as actionTypes from './actionTypes';


//DICTIONARY
export const selectDictionary = (id) => {
    return {
        type: actionTypes.SELECT_DICTIONARY,
        payload: id
    }
}


export const addDictionary = (dic) => {
    return {
        type: actionTypes.ADD_DICTIONARY,
        payload: dic
    }
}

export const deleteDictionary = (id) => {
    return {
        type: actionTypes.DELETE_DICTIONARY,
        payload: id
    }
}


//WORD

export const addWord = (word) => {
    return {
        type: actionTypes.ADD_WORD,
        payload: word
    }
}


//MODAL

export const showDicModal = () => {
    return {
        type: actionTypes.SHOW_DIC_MODAL
    }
}

export const showWordModal = () => {
    return {
        type: actionTypes.SHOW_WORD_MODAL
    }
}

export const hideModal = () => {
    return {
        type: actionTypes.HIDE_MODAL
    }
}
