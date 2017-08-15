
import React from 'react';
import ReactDOM from 'react-dom';
import Week from './../../components/Week.js';
import renderer from 'react-test-renderer';

it('should render a week', () => {
  const tree = renderer.create(<Week />).toJSON();
  expect(tree).toMatchSnapshot();
});
