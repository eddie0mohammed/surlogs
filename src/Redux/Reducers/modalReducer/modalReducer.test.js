
import * as actionTypes from '../../Actions/actionTypes';
import modalReducer from './modalReducer';


describe("MODAL REDUCER", () => {

    it('should return the initial State', () => {

        const initialState = {
            showDicModal: false,
            showWordModal: false
        }
        expect(modalReducer(undefined, {})).toEqual(initialState);
    })

    
    describe('MODAL REDUCER SHOW_DIC_MODAL', () => {

        it('handles an action type of "SHOW_DIC_MODAL"', () => {
            
            const testAction = {
                type: actionTypes.SHOW_DIC_MODAL
            }
            const initialState = {
                showDicModal: false
            }

            const newState = modalReducer(initialState, testAction);
            expect(newState.showDicModal).toEqual(true);
        })
    })

    describe('MODAL REDUCER SHOW_WORD_MODAL', () => {

        it('handles an action type of "SHOW_WORD_MODAL"', () => {
            
            const testAction = {
                type: actionTypes.SHOW_WORD_MODAL
            }
            const initialState = {
                showWordModal: false
            }

            const newState = modalReducer(initialState, testAction);
            expect(newState.showWordModal).toEqual(true);
        })
    })

    describe('MODAL REDUCER HIDE_MODAL', () => {

        it('handles an action type of "HIDE_MODAL"', () => {
            
            const testAction = {
                type: actionTypes.HIDE_MODAL
            }
            const initialState = {
                showWordModal: true
            }

            const newState = modalReducer(initialState, testAction);
            expect(newState.showWordModal).toEqual(false);
        })
    })

    describe('MODAL REDUCER RANDOM', () => {

        it('handles an action type of "UNKNOWN TYPE"', () => {
            
            const testAction = {
                type: 'UNKNOWN'
            }
            const initialState = {
                showWordModal: true
            }

            const newState = modalReducer(initialState, testAction);
            expect(newState.showWordModal).toEqual(true);
        })
    })
})