import * as actionTypes from '../../Actions/actionTypes';


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

const dictionaryReducer = (state = initialState, action) => {

    switch(action.type){

        //SELECT DICTIONARY TO DISPLAY
        case (actionTypes.SELECT_DICTIONARY):
            const selectedDic = state.dictionaries.filter((dic, i) => i === action.payload)[0];
            // console.log(selectedDic);
            return {
                ...state,
                selectedDictionary: selectedDic
            }

        //ADD NEW DICTIONARY TO DICTIONARY LIST
        case (actionTypes.ADD_DICTIONARY):
            let updatedDic = [...state.dictionaries, action.payload];
            return {
                ...state,
                dictionaries: updatedDic
            }

        //DELETE DICTIONARY FROM LIST
        case (actionTypes.DELETE_DICTIONARY):
            let filteredDic = state.dictionaries.filter((elem, i) => i !== action.payload);
            return{
                ...state,
                dictionaries: filteredDic
            }


        //ADD NEW WORD TO SPECIFIC DICTIONARY LIST
        case (actionTypes.ADD_WORD):
            const updatedWords = [...state.selectedDictionary.words, action.payload]
            // console.log(updatedWords);
            const selectedDictionary = state.selectedDictionary;
            selectedDictionary.words = updatedWords;
            // console.log(selectedDictionary);  
            let filteredDict = [...state.dictionaries].filter(elem => elem.name !== state.selectedDictionary.name);
            // console.log(filteredDict);  
            filteredDict = [...filteredDict, selectedDictionary];
            // console.log(filteredDict);
            
            
            return {
                ...state,
                dictionaries: filteredDict,
                selectedDictionary: {
                    ...state.selectedDictionary,
                    selectedDictionary
                }
                
            }

        //REMOVE WORD FROM SPECIFIC DICTIONARY
        case (actionTypes.DELETE_WORD):
                const filteredWords = [...state.selectedDictionary.words].filter((elem, i) => i !== action.payload);
                // console.log(filteredWords);
                const newSelectedDictionary = state.selectedDictionary;
                newSelectedDictionary.words = filteredWords;
                // console.log(selectedDictionary);  
                let newFilteredDict = [...state.dictionaries].filter(elem => elem.name !== state.selectedDictionary.name);
                // console.log(filteredDict);  
                newFilteredDict = [...newFilteredDict, newSelectedDictionary];
                // console.log(filteredDict);

                return {
                    ...state,
                    dictionaries: newFilteredDict,
                    selectedDictionary: {
                        ...state.selectedDictionary,
                        newSelectedDictionary
                    }
                }


        //FETCHING AND DISPLAYING TRANSLATION
        case (actionTypes.FETCH_TRANSLATION):
                return {
                    ...state,
                    translatedWord: action.payload
                }

        default:
            return state;
    }

    
}

export default dictionaryReducer;

