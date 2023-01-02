import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootElement);
appRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
