import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//react hot reloader hack for components until create-react-app supports
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextRoot = require('./containers/App').default;
    ReactDOM.render(
      <NextRoot />,
      document.getElementById('root')
    );
  });
}
