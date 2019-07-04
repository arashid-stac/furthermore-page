import React, { Component } from 'react';
import '../style/App.css';
import App21 from './contents.js';
import Clock from './contents2';
import App22 from './checkTime';

export default class App extends Component {
  render() {
    return (
      <div className="Everything">
        <App21 />
        <Clock />
        <App22 />
      </div>
    );
  }
}
