import React from 'react';
import '../../scss/components/Assignment_1/_userOutput.scss';

const UserOutput = (props) => (
    <div>
        <p className="userOutput">
            Username: {props.username},
        </p>
        <p>
            This was a great assignment
        </p>
    </div>
);

export default UserOutput;
