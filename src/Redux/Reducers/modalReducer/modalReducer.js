
import * as actionTypes from '../../Actions/actionTypes';


const initialState = {

    showDicModal: false,
    showWordModal: false

}


const modalReducer = (state = initialState, action) => {

    switch (action.type){


        case (actionTypes.SHOW_DIC_MODAL):
            return {
                ...state,
                showDicModal: true
            }

        case (actionTypes.SHOW_WORD_MODAL):
            return {
                ...state,
                showWordModal: true
            }

        case (actionTypes.HIDE_MODAL):
            return {
                ...state,
                showDicModal: false,
                showWordModal: false
            }

        default:
            return state
    }
}

export default modalReducer;