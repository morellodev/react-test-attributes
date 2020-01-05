import * as React from 'react';
import { render } from '@testing-library/react';
import Test from '../src';

describe('Basic actions', () => {
  it('Renders without crashing', () => {
    render(
      <Test id="title">
        <h1>Title</h1>
      </Test>
    );
  });

  it('Correctly sets "data-test-id" attribute', () => {
    const { container } = render(
      <Test id="title">
        <h1>Title</h1>
      </Test>
    );

    expect(container.querySelector('[data-test-id="title"]')).toBeInstanceOf(
      HTMLHeadingElement
    );
  });

  it('Correctly handles React fragments', () => {
    const { container } = render(
      <Test id="title">
        <React.Fragment>
          <h1>Title</h1>
        </React.Fragment>
      </Test>
    );

    expect(container.querySelector('[data-test-id="title"]')).toBeInstanceOf(
      HTMLDivElement
    );
  });

  it('Correctly sets custom "data-" attribute', () => {
    const { container } = render(
      <Test id="title" suffix="test">
        <h1>Title</h1>
      </Test>
    );

    expect(container.querySelector('[data-test="title"]')).toBeInstanceOf(
      HTMLHeadingElement
    );
  });
});
