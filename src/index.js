/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domContainer = document.getElementById('root');
const myElement = React.createElement('div', null, App());

const root = ReactDOM.createRoot(domContainer);
root.render(myElement);

reportWebVitals();
