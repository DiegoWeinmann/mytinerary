import React from 'react';
import { mount } from 'enzyme';
import LandingPage from 'components/pages/LandingPage';
import Header from 'components/Header/Header';

it('has a header component', () => {
	const wrapper = mount(<LandingPage />);
	expect(wrapper.find(Header).length).toBe(1);
	wrapper.unmount();
});
