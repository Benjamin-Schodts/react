import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <h1>404 - Page Not Found</h1>
                <p>Please return to <a href="#" onClick={this.toStart}>step 1</a></p>
            </div>
        );
    }

    toStart = () => {
        this.props.history.push('/');
    }
}

export default NotFound;
