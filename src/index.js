import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app';
import { configureStore } from './store';
import * as actions from './actions';
import { Provider } from 'react-redux';

const tracks = [
  {
    id: 0,
    title: 'Em của ngày hôm qua'
  },
  {
    id: 1,
    title: 'Cơn mưa ngang qua'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root'));
registerServiceWorker();
