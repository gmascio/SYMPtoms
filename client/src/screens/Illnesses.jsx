import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Illness from '../components/Illness'

function Illnesses(props) {
  const { illnesses } = props
  const [readMore,setReadMore]=useState(false);
  
  const linkName = readMore ? 'Read Less << ' : 'About SymptoMate >> '
  const info = 'Have you ever Googled your symptoms and found some very absurd,alarming diagnoses? SymptoMate is a platform where users can share symptoms experienced with pertinent illnesses. You have access to Real Symptoms from Real People!'
 
  return (
    <>
        <div className='about'>
           
           <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
     <p>{readMore && info}</p>
           </div>
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
