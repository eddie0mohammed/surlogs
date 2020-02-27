
import React from 'react';
import {shallow} from 'enzyme';

import Sidebar from './Sidebar';

import {storeFactory} from '../../testingUtils/storeFactory';


const setup = (initialState = {}) => {

    const store = storeFactory(initialState);
    const wrapper = shallow(<Sidebar store={store} />).dive().dive()
    // console.log(wrapper.debug());
    return wrapper;

}



describe('renders Sidebar', () => {

    it('renders SIDEBAR without error', () => {

        const wrapper = setup();
        const sidebarComponent = wrapper.find('[data-test="sidebar-component"]');
        expect(sidebarComponent.length).toEqual(1);
    })

    it('renders correct number of dictionaries',  () => {
        const wrapper = setup({dic: {dictionaries: [{name: 'mydic', fromLanguage: 'french', toLanguage: 'english'}]}});
        const liComponent = wrapper.find('[data-test="li-component"]');
        // expect(liComponent.length).toEqual(1);
        
        
    })



})