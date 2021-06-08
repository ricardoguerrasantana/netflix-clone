import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { FirebaseProvider } from './providers';
import { firebase } from './lib/firebase.prod';

localStorage.debug = 'App:*';
// localStorage.debug = 'App:*,-App:groupByGenre';
// localStorage.removeItem('debug');

render(
  <FirebaseProvider firebase={firebase} >
    <GlobalStyles />

    <App />
  </FirebaseProvider>
  , document.getElementById('root'));
