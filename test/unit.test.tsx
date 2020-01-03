import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from '../src';

describe('Basic actions', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Test id="title">
        <h1>Title</h1>
      </Test>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('Correctly sets "data-test-id" attribute', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Test id="title">
        <h1>Title</h1>
      </Test>,
      div
    );

    expect(document.querySelector('[data-test-id="title"]')).toBeDefined();

    ReactDOM.unmountComponentAtNode(div);
  });

  it('Correctly sets custom "data-" attribute', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Test id="title" suffix="test">
        <h1>Title</h1>
      </Test>,
      div
    );

    expect(document.querySelector('[data-test="title"]')).toBeDefined();

    ReactDOM.unmountComponentAtNode(div);
  });
});
