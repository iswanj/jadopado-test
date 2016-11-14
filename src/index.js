import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { browserHistory} from 'react-router';

import Root from './containers/Root';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
);

//react hot reloader hack for components until create-react-app supports
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    ReactDOM.render(
      <NextRoot store={store} history={browserHistory} />,
      document.getElementById('root')
    );
  });
}
