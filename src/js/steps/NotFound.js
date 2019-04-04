import React, {Component} from 'react';
import {fetch, push} from '../utils/remoteState';

class NotFound extends Component {
    constructor() {
        super();
        this.state = fetch();
        this.state.title = '404 - Page Not Found';
        this.state.lastRoute = '/step1';
        push(this.state);
    }

    render() {
        return (
            <div className="container">
                <h1>Not found</h1>
                <p>Please return to <a href="#" onClick={this.toStart}>step 1</a></p>
            </div>
        );
    }

    toStart = () => {
        this.props.history.push(this.state.lastRoute);
    }
}

export default NotFound;
