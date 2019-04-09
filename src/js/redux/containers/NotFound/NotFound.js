import React from 'react';

function NotFound() {
    const toStart = () => {
        this.props.history.push('/');
    };

    return (
        <div className="container">
            <h1>404 - Page Not Found</h1>
            <p>Please return to <a href="#" onClick={toStart}>step 1</a></p>
        </div>
    );
}

export default NotFound;
