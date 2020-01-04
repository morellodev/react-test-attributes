import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test, { TestAttributesConfig } from '../.';

const App = () => {
  return (
    <TestAttributesConfig value={{ suffix: 'tid' }}>
      <Test id="title">
        <h1>Title</h1>
      </Test>
      <Test id="subtitle">
        <h2>Subtitle</h2>
      </Test>
      <Test id="btn-submit">
        <button>Submit</button>
      </Test>
    </TestAttributesConfig>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
