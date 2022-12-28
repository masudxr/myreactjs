/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Home() {
    return <h1>Home</h1>;
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const element = <Home />;
root2.render(element);
// ----------------------------
function Service(props) {
    return <h1>Service{props.name}</h1>;
}
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
const element3 = <Service name="Page" />;
root3.render(element3);

// --------------------------
function About() {
    return <h1>About</h1>;
}
const root4 = ReactDOM.createRoot(document.getElementById('root4'));
const element4 = <About />;
root4.render(element4);
// -----------------------

function Contact(props) {
    return <h1>{props.name}</h1>;
}
const root5 = ReactDOM.createRoot(document.getElementById('root5'));
const element5 = <Contact name="Contact" />;
root5.render(element5);

const domContainer = document.getElementById('root');
const myElement = React.createElement('div', null, 'Featured Products');

const root = ReactDOM.createRoot(domContainer);
root.render(myElement);
// winter collection
function WinCol(props) {
    return <h1>{props.name}</h1>;
}
const winCol = ReactDOM.createRoot(document.getElementById('winCol'));
const winter = <WinCol name="Winter Collection New Modern Design" />;
winCol.render(winter);

const domContainer1 = document.getElementById('Approot');
const appele = React.createElement('div', null, App());

const rootApp = ReactDOM.createRoot(domContainer1);
rootApp.render(appele);

reportWebVitals();
