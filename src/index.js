import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'startbootstrap-clean-blog/css/clean-blog.css';

import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap/dist/js/bootstrap.bundle.min.js');
// require('jquery-easing');
require('startbootstrap-clean-blog/js/clean-blog.min.js')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
