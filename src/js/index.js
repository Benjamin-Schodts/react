import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers/index';
import Cart from './containers/Cart/Cart';

import NotFound from './containers/NotFound/NotFound';
import DeliveryMethod from './containers/DeliveryMethod/DeliveryMethod';
import Loader from './components/Loader';

import '../scss/style.scss';

import './i18n/i18n';

const store = createStore(reducer);

const reduxRouting = (
    <Provider store={store}>
        <Router>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={Cart} />
                    <Route path="/delivery-method" component={DeliveryMethod} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    </Provider>
);

ReactDOM.render(reduxRouting, document.getElementById('root'));

module.hot.accept();
