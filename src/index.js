import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//  import CookiesProvider from 'universal-cookie';


import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8222";
axios.defaults.withCredentials = true;

React.icons = icons

ReactDOM.render(
  // <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  // </CookiesProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
