import * as React from 'react';

interface TestAttributeProps {
  id: string;
  suffix?: string;
}

export const TestAttribute: React.FC<TestAttributeProps> = ({
  id,
  suffix = 'test-id',
  children,
}) => {
  const isProduction = process.env.NODE_ENV === 'production';

  function withTestAttribute(nodes: React.ReactNode): React.ReactNode {
    const node = React.Children.only(nodes);
    const testAttributeName = `data-${suffix}`;

    if (typeof (node as React.ReactElement).type === 'symbol') {
      return React.createElement('div', { [testAttributeName]: id }, node);
    } else {
      return React.cloneElement(node as React.ReactElement, {
        [testAttributeName]: id,
      });
    }
  }

  return (
    <React.Fragment>
      {isProduction ? children : withTestAttribute(children)}
    </React.Fragment>
  );
};
