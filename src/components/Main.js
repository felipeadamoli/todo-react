import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App/App';

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </Router>
    );
  }
}

export default Main;
