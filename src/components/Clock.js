import React from 'react';
// import App from './App';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Current Time Clock:{' '}
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

export default Clock;
