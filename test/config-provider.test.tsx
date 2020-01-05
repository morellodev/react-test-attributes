import * as React from 'react';
import { render } from '@testing-library/react';
import Test, { TestAttributesConfig } from '../src';

describe('Config provider', () => {
  it('Correctly inherits attribute suffix from Provider', () => {
    const { container } = render(
      <TestAttributesConfig value={{ suffix: 'tid' }}>
        <Test id="title">
          <h1>Title</h1>
        </Test>
      </TestAttributesConfig>
    );

    expect(container.querySelector('[data-tid="title"]')).toBeInstanceOf(
      HTMLHeadingElement
    );
  });

  it('Correctly handles configuration precedence', () => {
    const { container } = render(
      <TestAttributesConfig value={{ suffix: 'tid' }}>
        <Test id="title" suffix="test-inner-id">
          <h1>Title</h1>
        </Test>
      </TestAttributesConfig>
    );

    expect(
      container.querySelector('[data-test-inner-id="title"]')
    ).toBeInstanceOf(HTMLHeadingElement);
  });
});
