/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// react of class component
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
// import App from './App';

class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    Current Time Clock: {new Date().toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;
