import { React, useState } from 'react';
import {Link} from 'react-router-dom'

function Illness(props) {
  const { illness } = props
 
  return (
    <div className= "illness-card">
      <Link to={`/illnesses/${illness.id}`}>
        <h5 className="illness-titles">{illness.name}</h5></Link>
      <Link to={`/illnesses/${illness.id}`}>
        <div className="illness-image">
          <img className= "illness-pic" src={illness.image} alt={illness.name} ></img>
          </div>
            </Link>
        
    </div>
  )
}

export default Illness
