import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test, { TestAttributesConfig } from '../src';

describe('Config provider', () => {
  it('Correctly inherits attribute suffix from Provider', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <TestAttributesConfig value={{ suffix: 'tid' }}>
        <Test id="title">
          <h1>Title</h1>
        </Test>
      </TestAttributesConfig>,
      div
    );

    expect(div.querySelector('[data-tid="title"]')).toBeInstanceOf(
      HTMLHeadingElement
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('Correctly handles configuration precedence', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <TestAttributesConfig value={{ suffix: 'tid' }}>
        <Test id="title" suffix="test-inner-id">
          <h1>Title</h1>
        </Test>
      </TestAttributesConfig>,
      div
    );

    expect(div.querySelector('[data-test-inner-id="title"]')).toBeInstanceOf(
      HTMLHeadingElement
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
