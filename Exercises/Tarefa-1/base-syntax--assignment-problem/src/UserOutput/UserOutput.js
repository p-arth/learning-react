import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>This is a {props.username}'s output</p>
      <p>This is also a {props.username}'s output</p>
    </div>
  )
};

export default userOutput;
