import React from 'react';
import { Link } from "react-router-dom";
import ButtonSecondary from './ButtonSecondary';

function Boldtext(props) {
  return (
      <>
          <div className="bold_text">{props.bold_text}</div>
         
      </>
  )
}

export default Boldtext