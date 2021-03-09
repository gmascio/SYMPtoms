import { React, useState } from 'react';
import {Link} from 'react-router-dom'

function Illness(props) {
  const { illness } = props
  const [readMore,setReadMore]=useState(false);
  // const extraContent=<div>
  //     <p className="extra-content">
  //     {illnesses.description}
  //     </p>
  // </div>
  // console.log(illnesses.description)
  const linkName=readMore?'Read Less << ':'Learn More >> '
  return (
    <div className= "illness-card">
      <Link to={`/illnesses/${illness.id}`}>
        <h5>{illness.name}</h5></Link>
      <Link to={`/illnesses/${illness.id}`}>
        <div className="illness-image">
          <img src={illness.image} alt={illness.name} width="85" height="95"></img>
          </div>
            </Link>
          <div>
           
            <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      <p>{readMore && illness.description}</p>
            </div>
    </div>
  )
}

export default Illness
