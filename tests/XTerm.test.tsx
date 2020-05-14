import { mount } from 'enzyme'
import * as React from 'react'
import { XTerm } from '../src'

describe('<XTerm />', () => {
	it('should render correctly', () => {
		const wrapper = mount(<XTerm />)
		expect(wrapper.html()).toMatchSnapshot()
	})
})
