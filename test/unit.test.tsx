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

    expect(div.querySelector('[data-test-id="title"]')).toBeInstanceOf(
      HTMLHeadingElement
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('Correctly handles React fragments', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Test id="title">
        <React.Fragment>
          <h1>Title</h1>
        </React.Fragment>
      </Test>,
      div
    );

    expect(div.querySelector('[data-test-id="title"]')).toBeInstanceOf(
      HTMLDivElement
    );

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

    expect(div.querySelector('[data-test="title"]')).toBeInstanceOf(
      HTMLHeadingElement
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
