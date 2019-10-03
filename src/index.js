import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';



import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HttpsRedirect>
        <Router>
            <App />
        </Router>
    </HttpsRedirect>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
