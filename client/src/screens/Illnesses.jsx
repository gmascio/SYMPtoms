import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Illness from '../components/Illness'

function Illnesses(props) {
  const { illnesses } = props
 
  return (
     <>
      <h3>
        Illnesses
      </h3>
    
      
    <div className="illnesses">
      {illnesses.map((illness) => (
        <React.Fragment key={illness.id}>
          <Illness illness={illness}/>
         
        </React.Fragment>
      ))}
      </div>
      </>
  )
}

export default Illnesses
