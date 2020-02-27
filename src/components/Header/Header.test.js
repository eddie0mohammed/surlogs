
import React from 'react';

import {shallow} from 'enzyme';
import {storeFactory} from '../../testingUtils/storeFactory';

import Header from './Header';


const setup = (initialState = {}) => {

    const store = storeFactory(initialState);
    const wrapper = shallow(<Header store={store} />).dive().dive()
    // console.log(wrapper.debug());
    return wrapper;

}

describe('render HEADER', () => {

    it('renders HEADER without error', () => {

        const wrapper = setup();
        const headerComponent = wrapper.find('[data-test="header-component"]');
        expect(headerComponent.length).toEqual(1);
        
    })
})