
import * as actionTypes from '../../Actions/actionTypes';


const initialState = {
    currentSound: ''
}

const soundReducer = (state = initialState, action) => {

    switch (action.type){

        case (actionTypes.FETCH_SOUND):
            return {
                ...state,
                currentSound: action.payload
            }

        default:
            return state;
    }
}

export default soundReducer;