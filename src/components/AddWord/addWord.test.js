
import React from 'react';

import {shallow} from 'enzyme';
import AddWord from './AddWord';

import {storeFactory} from '../../testingUtils/storeFactory';


const setup = (initialState = {}) => {

    const store = storeFactory(initialState);
    const wrapper = shallow(<AddWord store={store} />).dive().dive()
    // console.log(wrapper.debug());
    return wrapper;

}


describe('renders AddWord Component', () => {

    it('renders ADDWORD without errors', () => {

        const wrapper = setup();
        const addWordComponent = wrapper.find('[data-test="addWord-component"]');
        expect(addWordComponent.length).toEqual(1);
    })

    it('changes the value of WORD on change', () => {
        const wrapper = setup();
        const wordInput = wrapper.find('[data-test="word-component"]');
        wordInput.simulate('change', {target: {value:"hello", name: 'word'}});
        expect(wrapper.state().word).toEqual('hello')
    })

    it('changes the value of TRANSLATEDWORD on change', () => {
        const wrapper = setup();
        const translatedwordInput = wrapper.find('[data-test="translatedWord-component"]');
        translatedwordInput.simulate('change', {target: {value:"hello", name: 'translatedWord'}});
        expect(wrapper.state().translatedWord).toEqual('hello')
    })

    it('renders the button component without error', () => {
        const wrapper = setup();
        const buttons = wrapper.find('[data-test="buttons-component"]');
        expect(buttons.length).toEqual(1);
    })

})