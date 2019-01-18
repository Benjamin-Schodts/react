import React from 'react';
import ReactDom from 'react-dom';

import '../scss/style.scss';

function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your age: {props.age}</p>
        </div>
    );
}

const app = (
    <div>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" />
    </div>
);

ReactDom.render(
    app,
    document.querySelector('#app')
);
