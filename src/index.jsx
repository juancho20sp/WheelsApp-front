import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
