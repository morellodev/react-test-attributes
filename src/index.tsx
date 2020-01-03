import * as React from 'react';

interface TestProps {
  id: string;
  suffix?: string;
}

const Test: React.FC<TestProps> = ({ id, suffix = 'test-id', children }) => {
  const isProduction = process.env.NODE_ENV === 'production';

  function withTestAttribute(nodes: React.ReactNode): React.ReactNode {
    const node = React.Children.only(nodes);
    const element = node as React.ReactElement;

    if (typeof element.type === 'symbol') {
      return <div {...{ [`data-${suffix}`]: id }}>{node}</div>;
    } else {
      return React.cloneElement(element, {
        [`data-${suffix}`]: id,
      });
    }
  }

  return (
    <React.Fragment>
      {isProduction ? children : withTestAttribute(children)}
    </React.Fragment>
  );
};

export default Test;
