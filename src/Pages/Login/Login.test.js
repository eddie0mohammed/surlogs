import React from 'react';

import {shallow} from 'enzyme';

import Login from './Login';

import {storeFactory} from '../../testingUtils/storeFactory';


const setup = (initialState = {}) => {

    const store = storeFactory(initialState);
    const wrapper = shallow(<Login store={store} />).dive().dive()
    // console.log(wrapper.debug());
    return wrapper;

}

describe('render', () => {

    it('renders INPUT COMPONENT without error', () => {

        const wrapper = setup();
        const inputComponent = wrapper.find('[data-test="input-component"]');
        expect(inputComponent.length).toEqual(1);

    })

    it('renders the FORM without error', () => {
        const wrapper = setup();
        const formComponent = wrapper.find('[data-test="form-component"]');
        expect(formComponent.length).toEqual(1);
    })
    
    it('renders the CREDENTIALS without error', () => {
        const wrapper = setup();
        const credentialsComponent = wrapper.find('[data-test="credentials-component"]');
        expect(credentialsComponent.length).toEqual(1);
    })


    it('changes the value of EMAIL on change', () => {

        const wrapper = setup();
        const emailInput = wrapper.find('[data-test="emailInput-component"]');
        emailInput.simulate('change', {target: {value:"hello", name: 'email'}})  
        expect(wrapper.state().email).toEqual('hello');
    })

    it('changes the value of PASSWORD on change', () => {
        const wrapper = setup();
        const passwordInput = wrapper.find('[data-test="passwordInput-component"]')
        passwordInput.simulate('change', {target: {value:"hello", name: 'password'}})  
        expect(wrapper.state().password).toEqual('hello');
    })


 
})