
import {createStore} from 'redux';
import rootReducer from './rootReducer';

import modalReducer from './modalReducer/modalReducer';
import authReducer from './authReducer/authReducer';
import soundReducer from './soundReducer/soundReducer';


describe('ROOT REDUCER', () => {

    let store;
    beforeEach(() => {
        store = createStore(rootReducer);
    })

    it('defines modal state correctly', () => {
        const expectedState = modalReducer(undefined, {});

        expect(store.getState().modal).toEqual(expectedState);
    })

    it('defines auth state correctly', () => {
        const expectedState = authReducer(undefined, {});

        expect(store.getState().auth).toEqual(expectedState);
    })

    it('defines sound state correctly', () => {
        const expectedState = soundReducer(undefined, {});

        expect(store.getState().sound).toEqual(expectedState);
    })

    

})

