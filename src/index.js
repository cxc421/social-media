import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
//import 'font-awesome/css/font-awesome.css';
import './index.build.css';
import App from './js/App';
//import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
console.log('Last refrsh time: ' + (new Date()).toLocaleTimeString() );
//registerServiceWorker();

