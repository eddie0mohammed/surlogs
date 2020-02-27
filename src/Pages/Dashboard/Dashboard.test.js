
import React from 'react';

import {shallow} from 'enzyme';

import Dashboard from './Dashboard';


describe('render DASHBOARD', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Dashboard />);
    })

    it('renders without error', () => {

        const dashboardComponent = wrapper.find('[data-test="dashboard-component"]');
        expect(dashboardComponent.length).toEqual(1);

    })
})