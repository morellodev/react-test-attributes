import * as React from 'react';
import * as ReactIs from 'react-is';
import defaultConfig from '../config';
import { ConfigInterface } from '../types';
import TestConfigContext from '../test-config-context';

interface TestAttributeProps extends ConfigInterface {
  id: string;
}

export const TestAttribute: React.FC<TestAttributeProps> = ({
  children,
  ...props
}) => {
  const isProduction = process.env.NODE_ENV === 'production';

  const config = Object.assign(
    {},
    defaultConfig,
    React.useContext(TestConfigContext),
    props
  );

  function withTestAttribute(nodes: React.ReactNode): React.ReactNode {
    const node = React.Children.only(nodes);
    const testAttributeName = `data-${config.suffix}`;

    if (ReactIs.isFragment(node)) {
      return React.createElement(
        'div',
        { [testAttributeName]: config.id },
        node
      );
    } else if (ReactIs.isElement(node)) {
      return React.cloneElement(node as React.ReactElement, {
        [testAttributeName]: config.id,
      });
    } else {
      return node;
    }
  }

  return (
    <React.Fragment>
      {!config.enableInProductionMode && isProduction
        ? children
        : withTestAttribute(children)}
    </React.Fragment>
  );
};
