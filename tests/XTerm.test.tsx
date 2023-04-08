import { mount } from 'enzyme'
import * as React from 'react'
import { XTerm } from '../src'

// Mock 'matchMedia' function to make the test work with jsdom/jest
//   https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
	  matches: false,
	  media: query,
	  onchange: null,
	  addListener: jest.fn(), // deprecated
	  removeListener: jest.fn(), // deprecated
	  addEventListener: jest.fn(),
	  removeEventListener: jest.fn(),
	  dispatchEvent: jest.fn(),
	})),
});

describe('<XTerm />', () => {
	it('should render correctly', () => {
		const wrapper = mount(<XTerm />)
		expect(wrapper.html()).toMatchSnapshot()
	})
})
