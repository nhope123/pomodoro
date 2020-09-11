import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './display.css';
import './botton.css';
/* import './clock.css'; */
import * as clock from "./clock.js";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <clock.PomoClock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
