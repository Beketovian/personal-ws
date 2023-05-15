import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

// Import the required stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import the required JavaScript files
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
