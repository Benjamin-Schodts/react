import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import '../scss/style.scss';

const routing = (
    <Router>
        <div className="container">
            <Route path="/" exact component={App} />
            <Route path="/step1" component={Step1} />
            <Route path="/step2" component={Step2} />
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

module.hot.accept();
