import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store/store';
import App from '../components/App/App';

it('renders without crashing', () => {
	const component = shallow(<App />);

	expect(component).toMatchSnapshot();
});
