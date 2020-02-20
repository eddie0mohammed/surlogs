import * as actionTypes from '../Actions/actionTypes';


const initialState = {

    dictionaries: [
        {
            name: 'Dic 1',
            language: 'English',
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
            language: 'French',
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
            language: 'German',
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

}

const dictionaryReducer = (state = initialState, action) => {

    switch(action.type){

        case (actionTypes.SELECT_DICTIONARY):
            const selectedDic = state.dictionaries.filter((dic, i) => i === action.payload)[0];
            // console.log(selectedDic);
            return {
                ...state,
                selectedDictionary: selectedDic
            }

        case (actionTypes.ADD_DICTIONARY):
            let updatedDic = [...state.dictionaries, action.payload];
            return {
                ...state,
                dictionaries: updatedDic
            }

        case (actionTypes.DELETE_DICTIONARY):
            let filteredDic = state.dictionaries.filter((elem, i) => i !== action.payload);
            return{
                ...state,
                dictionaries: filteredDic
            }


        case (actionTypes.ADD_WORD):
            const updatedWords = [...state.selectedDictionary.words, action.payload]
            // console.log(updatedWords);
            
            
            return {
                ...state,
                ...state.selectedDictionary,
                words: updatedWords
                
            }

        default:
            return state;
    }

    
}

export default dictionaryReducer;