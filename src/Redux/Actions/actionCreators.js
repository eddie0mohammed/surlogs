
import * as actionTypes from './actionTypes';

import axios from 'axios';

import {languages} from '../../components/AddDictionary/languages';
import {languageVoiceCodes} from '../../components/AddDictionary/languageVoiceCode';



//DICTIONARY
export const selectDictionary = (id) => {
    return {
        type: actionTypes.SELECT_DICTIONARY,
        payload: id
    }
}


export const addDictionary = (dic) => {
    return {
        type: actionTypes.ADD_DICTIONARY,
        payload: dic
    }
}

export const deleteDictionary = (id) => {
    return {
        type: actionTypes.DELETE_DICTIONARY,
        payload: id
    }
}


//WORD

export const addWord = (word) => {
    return {
        type: actionTypes.ADD_WORD,
        payload: word
    }
}

export const deleteWord = (id) => {
    return {
        type: actionTypes.DELETE_WORD,
        payload: id
    }
}


//MODAL

export const showDicModal = () => {
    return {
        type: actionTypes.SHOW_DIC_MODAL
    }
}

export const showWordModal = () => {
    return {
        type: actionTypes.SHOW_WORD_MODAL
    }
}

export const hideModal = () => {
    return {
        type: actionTypes.HIDE_MODAL
    }
}


//SIGN_IN

export const signIn = () => {
    return {
        type: actionTypes.SIGN_IN
    }
}

export const displayErrorMsg = () => {
    return {
        type: actionTypes.SHOW_ERROR
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}


//TRANSLATION

const fetchTranslationAction = (translation) => {
    return {
        type: actionTypes.FETCH_TRANSLATION,
        payload: translation
    }
}

export const fetchTranslation = (language, word) => {
    return async (dispatch) => {
        
        try{
            //fetch translation
            const API_KEY = process.env.REACT_APP_API_KEY;
            let languageCode = getLanguageCode(language);

            let text = word.trim();
            text = text.split(' ').join('%20');


            const response = await axios.get(`https://translation.googleapis.com/language/translate/v2?target=${languageCode}&key=${API_KEY}&q=${text}`)
            // console.log(response);
            // const translation = ` (source: ${response.data.data.translations[0].detectedSourceLanguage}) : Translation - ${response.data.data.translations[0].translatedText.toUpperCase()} `;
            const translation = response.data.data.translations[0].translatedText.toUpperCase();

            dispatch(fetchTranslationAction(translation));

        }catch(error){
            console.log(error);
        }


      };
}


//get language code
const getLanguageCode = (language) => {
    // console.log(language);
    
    return languages[language];
    
}



// audio

const fetchSoundAction = (sound) => {
    return {
        type: actionTypes.FETCH_SOUND,
        payload: sound
    }
}

export const fetchSound = (translatedWord, translatedTo) => {

    return async (dispatch) => {


        try{
            //fetch sound
            const API_KEY = process.env.REACT_APP_API_KEY;
            
            // console.log(translatedWord);
            // console.log(translatedTo);

            let languageCode = getLanguageVoiceCode(translatedTo);
            // console.log(languageCode);

            const data = {
        
                "input": {
                    "text": `${translatedWord}`
                },
            
                "voice": {
                    "languageCode": `${languageCode}`,
                    "ssmlGender": "MALE"
                },
                
                "audioConfig": {
                    "audioEncoding": "MP3"
                }   
            }

            // console.log(data);
            const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;

            const response = await axios.post(url, data);
            // console.log(response.data);

            dispatch(fetchSoundAction(response.data))




        }
        catch(error){
            console.log(error);
        }
    }
}

const getLanguageVoiceCode = (language) => {

    let value = 'en-US';
    if (languageVoiceCodes.hasOwnProperty(language.toLowerCase())){
        value = languageVoiceCodes[language.toLowerCase()];
    }
    return value;
}