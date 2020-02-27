
import * as actionTypes from '../../Actions/actionTypes';

import authReducer from './authReducer';



describe('AUTH REDUCER', () => {

    it('should return the initial State', () => {

        const initialState = {
            logged: false,
            email: 'test@test.com',
            password: '11111111',
            error: false
        }
        expect(authReducer(undefined, {})).toEqual(initialState);
    })


    describe('AUTH REDUCER SIGN_IN', () => {

        it('has an action type of "SIGN_IN"', () => {
            
            const testAction = {
                type: actionTypes.SIGN_IN
            }
            const initialState = {
                logged: false
            }

            const newState = authReducer(initialState, testAction);
            expect(newState.logged).toEqual(true);
        })
    })

    describe('AUTH REDUCER SIGN_OUT', () => {

        it('has an action type of "SIGN_OUT"', () => {
            
            const testAction = {
                type: actionTypes.SIGN_OUT
            }
            const initialState = {
                logged: true
            }

            const newState = authReducer(initialState, testAction);
            expect(newState.logged).toEqual(false);
        })
    })

    describe('AUTH REDUCER SHOW_ERROR', () => {

        it('has an action type of "SHOW_ERROR"', () => {
            
            const testAction = {
                type: actionTypes.SHOW_ERROR
            }
            const initialState = {
                error: false
            }

            const newState = authReducer(initialState, testAction);
            expect(newState.error).toEqual(true);
        })
    })

    describe('AUTH REDUCER LOGOUT', () => {

        it('has an action type of "LOGOUT"', () => {
            
            const testAction = {
                type: actionTypes.LOGOUT
            }
            const initialState = {
                logged: true
            }

            const newState = authReducer(initialState, testAction);
            expect(newState.logged).toEqual(false);
        })
    })

    describe('AUTH REDUCER random', () => {

        it('handles action with "UNKNOWN TYPE"', () => {
            
            const testAction = {
                type: 'UNKNOWN'
            }
            const initialState = {
                logged: true
            }

            const newState = authReducer(initialState, testAction);
            expect(newState.logged).toEqual(true);
        })
    })


})


//DICTIONARY REDUCER
