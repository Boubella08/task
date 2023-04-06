import React from 'react';
import"./Task.css"

function CC1(props) {
  return (
    <li>
      {props.description}
      <button id='button1' onClick={props.onDelete}>Delete</button>
    </li>
  );
}

export default CC1;
