import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './redux/reducers/index';
import Cart from './redux/containers/Cart/Cart';

import NotFound from './redux/containers/NotFound/NotFound';
import DeliveryMethod from './steps/DeliveryMethod';

import '../scss/style.scss';

import './redux/i18n';

const store = createStore(reducer);

const reduxRouting = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Cart} />
                <Route path="/delivery-method" component={DeliveryMethod} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(reduxRouting, document.getElementById('root'));

module.hot.accept();
