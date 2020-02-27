
import * as actionTypes from '../../Actions/actionTypes';
import soundReducer from './soundReducer';

describe('SOUND REDUCER', () => {

    it('should return the initial State', () => {

        const initialState = {
            currentSound: ''
        }
        expect(soundReducer(undefined, {})).toEqual(initialState);
    })

    describe('FETCH_SOUND', () => {

        it('handles an actionType of type "FETCH_SOUND"', () => {

            const initialState = {
                currentSound: ''
            }

            const testAction = {
                type: actionTypes.FETCH_SOUND,
                payload: 'newSound'
            }

            const newState = soundReducer(initialState, testAction);
            expect(newState.currentSound).toEqual('newSound')
        })
    })

    describe('RANDOM CASE', () => {

        it('handles an UNKNOWN action type', () => {

            const initialState = {
                currentSound: ''
            }

            const testAction = {
                type: 'UNKNOWN',
            
            }

            const newState = soundReducer(initialState, testAction);
            expect(newState.currentSound).toEqual('')
        })
    })

    
})