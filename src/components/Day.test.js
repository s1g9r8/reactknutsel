
import React from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';
import renderer from 'react-test-renderer';


it('should render a day', () => {
  const tree = renderer.create(<Day/> ).toJSON();
  expect(tree).toMatchSnapshot();
});
