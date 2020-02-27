
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';


//DICTIONARY
describe('DICTIONARY action creators', () => {

    describe('selectDictionary', () => {
        let wrapper;
        beforeEach(() => {
            const id = 1;
            wrapper = actionCreators.selectDictionary(id);
        })

        it('has correct type', () => {
            
            expect(wrapper.type).toEqual(actionTypes.SELECT_DICTIONARY);

        })

        it('has correct payload', () => {
            expect(wrapper.payload).toEqual(1);
        })
    })


    describe('addDictionary', () => {
        let wrapper;
        beforeEach(() => {
            const dic = 'test';
            wrapper = actionCreators.addDictionary(dic);
        })

        it('has correct type', () => {
            
            expect(wrapper.type).toEqual(actionTypes.ADD_DICTIONARY);

        })

        it('has correct payload', () => {
            expect(wrapper.payload).toEqual('test');
        })
    })

    describe('deleteDictionary', () => {
        let wrapper;
        beforeEach(() => {
            const id = 1;
            wrapper = actionCreators.deleteDictionary(id);
        })

        it('has correct type', () => {
            
            expect(wrapper.type).toEqual(actionTypes.DELETE_DICTIONARY);

        })

        it('has correct payload', () => {
            expect(wrapper.payload).toEqual(1);
        })
    })

})


//WORD

describe ('WORD action creators ' , () => {

    describe('addWord', () => {
        let wrapper;
        beforeEach(() => {
            const word = 'test';
            wrapper = actionCreators.addWord(word);
        })

        it('has correct type', () => {
            
            expect(wrapper.type).toEqual(actionTypes.ADD_WORD);

        })

        it('has correct payload', () => {
            expect(wrapper.payload).toEqual('test');
        })
    })

    describe('deleteWord', () => {
        let wrapper;
        beforeEach(() => {
            const id = 1;
            wrapper = actionCreators.deleteWord(id);
        })

        it('has correct type', () => {
            
            expect(wrapper.type).toEqual(actionTypes.DELETE_WORD);

        })

        it('has correct payload', () => {
            expect(wrapper.payload).toEqual(1);
        })
    })

})



//MODAL

describe('MODAL action creators', () => {

    describe('showDicModal', () => {

        it('has correct type', () => {
            const wrapper = actionCreators.showDicModal(); 
            expect(wrapper.type).toEqual(actionTypes.SHOW_DIC_MODAL);

        })

    })

    describe('showWordModal', () => {

        it('has correct type', () => {
            const wrapper = actionCreators.showWordModal(); 
            expect(wrapper.type).toEqual(actionTypes.SHOW_WORD_MODAL);

        })

    })

    describe('hideModal', () => {

        it('has correct type', () => {
            const wrapper = actionCreators.hideModal(); 
            expect(wrapper.type).toEqual(actionTypes.HIDE_MODAL);

        })

    })
    
})


//SIGN IN

describe("AUTHENTICATION", () => {

    describe('SIGNIN', () => {

        it('has correct type', () => {
            const wrapper = actionCreators.signIn();
            expect(wrapper.type).toEqual(actionTypes.SIGN_IN);
        })
    })

    describe('LOGOUT', () => {

        it('has correct type', () => {
            const wrapper = actionCreators.logout();
            expect(wrapper.type).toEqual(actionTypes.LOGOUT);
        })
    })
})
