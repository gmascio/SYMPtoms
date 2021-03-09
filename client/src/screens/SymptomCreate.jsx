import React from 'react'

import { useState } from 'react';
function SymptomCreate(props) {
  const [formData, setFormData] = useState({
    description: ''
  });
  const { description } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Create Symptom</h3>
      <label>Symptom:
        <input
          type='text'
          name='name'
          value={description}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
  
}

export default SymptomCreate
