import React from 'react';
import ReactDOM from 'react-dom';
import Progress from '../lib/index.js';

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>HELLO!</h1>
        <Progress />
      </div>
    );
  };
};

ReactDOM.render(<Main />, document.getElementById('app'));