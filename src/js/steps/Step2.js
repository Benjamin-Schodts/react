import React, {Component} from 'react';
import {fetch} from '../utils/remoteState';

class Step2 extends Component {
    constructor() {
        super();
        this.state = fetch();
        this.state.title = 'Uw Winkelmandje - Step 2';
    }

    render() {
        return (
            <div className="step step2">
                <div className="container">
                    <h2>{this.state.title}</h2>
                </div>
            </div>
        );
    }
}

export default Step2;
