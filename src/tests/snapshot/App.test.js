import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import App from './../../App.js';
import { weekListReducer } from './../../reducers/reducers.js';


var store = createStore(weekListReducer, {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});


it('renders a snapshot', () => {
  const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
