import React from 'react';

import {shallow} from 'enzyme';
import {storeFactory} from '../../testingUtils/storeFactory';

import MainComponent from './MainComponent';


const setup = (initialState = {}) => {

    const store = storeFactory(initialState);
    const wrapper = shallow(<MainComponent store={store} />).dive().dive()
    // console.log(wrapper.debug());
    return wrapper;

}

describe('renders MAINCOMPONENT', () => {

     it('renders MAIN COMPONENT if A DICTIONARY IS SELECTED', () => {

        const selectedDictionary  = {
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
        }
        const wrapper = setup({dic: {selectedDictionary: selectedDictionary}});
        const mainComponent = wrapper.find('[data-test="main-component"]');
        expect(mainComponent.length).toEqual(1);
        
        

    })

    it('renders message is NO DICTIONARY IS SELECTED', () => {
        const wrapper = setup({dic: {selectedDictionary: ''}});        
        const mainComponent = wrapper.find('[data-test="para-component"]');
        expect(mainComponent.length).toEqual(1);
    });

})