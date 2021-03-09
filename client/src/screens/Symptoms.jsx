import React from 'react'

function Symptoms(props) {
  const { symptoms, handleDelete, currentUser } = props;
  // return (
  
  //   <div>
  //     <h3>Symptoms</h3>
  //     {symptoms.map((symptom) => (
  //       <React.Fragment key={symptom.id}>
  //         <Link to={`/symptoms/${symptom.id}`}><p>{symptom.name}</p></Link>
  //         { symptom.user_id === currentUser?.id &&
  //           <>
  //             <Link to={`/symptoms/${symptom.id}/edit`}><button>edit</button></Link>
  //             <button onClick={() => handleDelete(symptom.id)}>delete</button>
  //           </>
  //         }
  //       </React.Fragment>
  //     ))}
  //     <br />
  //     <Link to='/symptoms/new'><button>Create</button></Link>
  //   </div>
    
  // )
}

export default Symptoms
