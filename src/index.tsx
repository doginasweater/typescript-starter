import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import { store } from './store/store';

const renderApp = (r: JSX.Element) => {
  ReactDOM.render((
      <Provider store={store}>
        <BrowserRouter>
          {r}
        </BrowserRouter>
      </Provider>
    ),
    document.getElementById('root')
  );
};

renderApp(routes);

// for hot module replacement
if (module.hot) {
  module.hot.accept('./routes', () => {
    const { routes } = require('./routes');

    renderApp(routes);
  });
}