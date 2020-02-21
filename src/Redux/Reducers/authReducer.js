
import * as actionTypes from '../Actions/actionTypes';


const initialState = {

    logged: true,
    email: 'test@test.com',
    password: '11111111',
    error: false

}


const authReducer = (state = initialState, action) => {
    

    switch (action.type){

        case (actionTypes.SIGN_IN):
            return {
                ...state,
                logged: true,
                error: false
            }

        case (actionTypes.SIGN_OUT):
            return {
                ...state,
                logged: false,
                error: false
            }

        case (actionTypes.SHOW_ERROR):
            return {
                ...state,
                error: true
            }

        case (actionTypes.LOGOUT):
            return {
                ...state,
                logged: false
            }


        default: 
            return state
    }
}

export default authReducer;