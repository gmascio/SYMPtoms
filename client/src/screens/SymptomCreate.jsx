import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'

function SymptomCreate(props) {
  const { handleCreate, illnesses, currentUser } = props;
  console.log(illnesses)
  console.log(currentUser)
  const history = useHistory()
  const params = useParams()
  const ill_id = params.illness_id 
  // const id = { currentUser && (
  //   currentUser.id
  // }
  console.log(ill_id)
  const [formData, setFormData] = useState({
    description: '',
    // user_id: currentUser ? currentUser.id : "1",
    // illness_id: ill_id? Number(ill_id) : '',
  });
  useEffect(() => {
    setFormData(formData)
    
},[currentUser])
  const { description } = formData;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  return (
    <div className='container'>
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleCreate({ ...formData, user_id: currentUser.id , illness_id: ill_id});
      history.push('/')
    }}>
      <h3>Create Symptom</h3>
      <label>Symptom:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
      </form>
      </div>
  )
  
}

export default SymptomCreate
