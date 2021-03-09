import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Illness from './Illness'

function Illnesses(props) {
  const { illnesses } = props
 
  return (
    <div>
      <h3>
        Illnesses
      </h3>
      {illnesses.map((illness) => (
        <React.Fragment key={illness.id}>
          <Illness illness={illness}/>
         
        </React.Fragment>
      ))}
    </div>
  )
}

export default Illnesses
