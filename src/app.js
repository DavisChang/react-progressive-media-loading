import React from 'react';
import ReactDOM from 'react-dom';
import Progress from './index.js';
// import Progress from '../lib/index.js'; // use build version

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>HELLO! Davis22</h1>
        <Progress />
      </div>
    );
  };
};

ReactDOM.render(<Main />, document.getElementById('app'));
