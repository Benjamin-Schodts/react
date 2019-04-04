import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import NotFound from './steps/NotFound';
import DeliveryMethod from './steps/DeliveryMethod';
import '../scss/style.scss';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/step1" component={Step1} />
            <Route path="/step2" component={Step2} />
            <Route path="/delivery-method" component={DeliveryMethod} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

module.hot.accept();
