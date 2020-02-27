
import * as actionTypes from '../../Actions/actionTypes';
import dictionaryReducer from './dictionaryReducer';


describe("DICTIONARY REDUCER", () => {

   


    describe('SELECT_DICTIONARY', () => {

        it('has an actionType of "SELECT_DICTIONARY"', () => {

            const testAction = {
                type: actionTypes.SELECT_DICTIONARY,
                payload: 0
            }

            const initialState = {
                selectedDictionary: '',
                dictionaries: [{name: 'test'}, {name: 'test1'}]
            }
            const newState = dictionaryReducer(initialState, testAction);
            expect(newState.selectedDictionary).toEqual({name: 'test'});
        })
    })

    describe('ADD_DICTIONARY', () => {

        it('has an actionType of "ADD_DICTIONARY"', () => {

            const testAction = {
                type: actionTypes.ADD_DICTIONARY,
                payload: {name:'new dic'}
            }

            const initialState = {
                dictionaries: [{name: 'test'}, {name: 'test1'}]
            }
            const newState = dictionaryReducer(initialState, testAction);
            expect(newState.dictionaries).toEqual([...initialState.dictionaries, {name: 'new dic'} ]);
        })
    })

    describe('DELETE_DICTIONARY', () => {

        it('has an actionType of "DELETE_DICTIONARY"', () => {

            const testAction = {
                type: actionTypes.DELETE_DICTIONARY,
                payload: 0
            }

            const initialState = {
                dictionaries: [{name: 'test'}, {name: 'test1'}]
            }
            const newState = dictionaryReducer(initialState, testAction);
            expect(newState.dictionaries).toEqual([{name: 'test1'}]);
        })
    })

    describe('ADD_WORD', () => {

        it('has an actionType of "ADD_WORD"', () => {

            const testAction = {
                type: actionTypes.ADD_WORD,
                payload: {word: 'new'}
            }

            const initialState = {
                dictionaries: [{name: 'dic1'}],
                selectedDictionary: {
                    words: [{word: 'hello'}]
                }
            }

            const newState = dictionaryReducer(initialState, testAction);
            expect(newState.selectedDictionary.words).toEqual([{word: 'hello'}, {word: 'new'}])
            
        })
    })

    describe('DELETE_WORD', () => {

        it('has an actionType of "DELETE_WORD"', () => {

            const testAction = {
                type: actionTypes.DELETE_WORD,
                payload: 1
            }

            const initialState = {
                dictionaries: [{name: 'dic1'}],
                selectedDictionary: {
                    words: [{word: 'hello'}, {word: 'new'}]
                }
            }

            const newState = dictionaryReducer(initialState, testAction);
            expect(newState.selectedDictionary.words).toEqual([{word: 'hello'}])
            
        })
    })

    describe('FETCH_TRANSLATION',  () => {

        it('has an action of type FETCH_TRANSLATION', () => {
            
            const initialState = {
                translatedWord: ''
            }
            const testAction = {
                type: actionTypes.FETCH_TRANSLATION,
                payload: 'test'
            }

            const newState = dictionaryReducer(initialState, testAction);
            expect(newState.translatedWord).toEqual('test');
        })
    })

    describe('RANDOM CASE', () => {

        it('handles action with UNKNOWN TYPE', () => {
            const testAction = {
                type: 'UNKNOWN'
            }
            const initialState = {
                selectedDic: ''
            }

            const newState = dictionaryReducer(initialState, testAction);
            expect(newState.selectedDic).toEqual('')
        })
    })


    it('should return the initial State', () => {

        const initialState = {
            dictionaries: [
                {
                    name: 'Dic 1',
                    fromLanguage: 'English',
                    toLanguage: 'French',
                    languageCode: 'fr',
                    words: [
                        {
                            word: 'Hello',
                            language: 'english'
                        },
                        {
                            word: 'Hi',
                            language: 'english'
                        },
                        {
                            word: 'Good morning',
                            language: 'english'
                        }
                    ]
                },
        
                {
                    name: 'Dic 2',
                    fromLanguage: 'French',
                    toLanguage: 'Italian',
                    languageCode: 'it',
                    words: [
                        {
                            word: 'Bonjour',
                            language: 'french'
                        },
                        {
                            word: 'Salut',
                            language: 'french'
                        },
                        {
                            word: 'Bonsoir',
                            language: 'french'
                        }
                    ]
                },
        
                {
                    name: 'Dic 3',
                    fromLanguage: 'German',
                    toLanguage: 'English',
                    languageCode: 'en',
                    words: [
                        {
                            word: 'Guten morgen',
                            language: 'german'
                        },
                        {
                            word: 'Guten tag',
                            language: 'german'
                        },
                        {
                            word: 'Guten abend',
                            language: 'german'
                        },
                    ]
                }
            ],
        
            selectedDictionary: '',
            translatedWord: ''
        
        }
        expect(dictionaryReducer(undefined, {})).toEqual(initialState);
    })
})