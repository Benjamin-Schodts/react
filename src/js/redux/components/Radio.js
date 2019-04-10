import React from 'react';

const Radio = (props) => (
    <div className="radio">
        <input
            type="radio"
            name={props.name}
            value={props.value}
            id={props.id}
        />
        <label htmlFor={props.id} className="radio__label">
            {props.label}
        </label>
    </div>
);

export default Radio;
