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
  const linkName=readMore?'Read Less << ':'Read More >> '
  return (
    <div>
       <Link to={`/illnesses/${illness.id}`}><p>{illness.name}</p></Link>
          <Link to={`/illnesses/${illness.id}`}>
            <img src={illness.image} alt={illness.name} width="75" height="75"></img>
            </Link>
          <div>
           
            <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && illness.description}
            </div>
    </div>
  )
}

export default Illness
