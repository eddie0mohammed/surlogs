
import React from 'react';

import {shallow} from 'enzyme';

import {storeFactory} from '../../testingUtils/storeFactory';

import AddDictionary from './AddDictionary';


const setup = (initialState = {}) => {

    const store = storeFactory(initialState);
    const wrapper = shallow(<AddDictionary store={store} />).dive().dive()
    // console.log(wrapper.debug());
    return wrapper;

}

describe('renders AddDictionary', () => {

    it('renders the component without error', () => {

        const wrapper = setup();
        const addDictionaryComponent = wrapper.find('[data-test="addDictionary-component"]');
        expect(addDictionaryComponent.length).toEqual(1);
    })

    it('renders the FORM component without error', () => {

        const wrapper = setup();
        const addDictionaryComponent = wrapper.find('[data-test="form-component"]');
        expect(addDictionaryComponent.length).toEqual(1);
    })

    it('changes the value of NAME on change', () => {

        const wrapper = setup();
        const nameComponent = wrapper.find('[data-test="name-component"]');
        nameComponent.simulate('change', {target: {value:"hello", name: 'name'}});
        expect(wrapper.state().name).toEqual('hello');
    })

    it('changes the value of FROMLANGUAGE on change', () => {

        const wrapper = setup();
        const fromLanguageComponent = wrapper.find('[data-test="fromLanguage-component"]');
        fromLanguageComponent.simulate('change', {target: {value:"hello", name: 'fromLanguage'}});
        expect(wrapper.state().fromLanguage).toEqual('hello');
    })

    it('changes the value of TOLANGUAGE on change', () => {

        const wrapper = setup();
        const toLanguageComponent = wrapper.find('[data-test="toLanguage-component"]');
        toLanguageComponent.simulate('change', {target: {value:"hello", name: 'toLanguage'}});
        expect(wrapper.state().toLanguage).toEqual('hello');
    })

    it('renders button component', () => {
        const wrapper = setup();
        const buttonsComponent = wrapper.find('[data-test="buttons-component"]');
        expect(buttonsComponent.length).toEqual(1);
    })
    
})