import { createContext } from 'react';
import { ConfigInterface } from './types';

const TestConfigContext = createContext<ConfigInterface>({});
TestConfigContext.displayName = 'TestAttributesConfigContext';

export default TestConfigContext;
