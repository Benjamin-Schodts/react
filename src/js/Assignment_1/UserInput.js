import React from 'react';
import '../../scss/components/Assignment_1/_userInput.scss';

const UserInput = (props) => (
    <input type="text" className="userInput" value={props.username} onChange={props.changed} />
);


export default UserInput;
