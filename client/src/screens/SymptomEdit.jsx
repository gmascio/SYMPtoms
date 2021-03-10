import React from 'react'

import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function SymptomEdit(props) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    description: ''
  });
  const { description } = formData;
  const { illnesses,symptoms, handleUpdate, currentUser } = props;
  const { id } = useParams();
  const params = useParams()
  const ill_id = params.illness_id 

  useEffect(() => {
    const prefillFormData = () => {
      const symptomItem = symptoms.find((symptom) => symptom.id === Number(id));
      setFormData({
        name: symptomItem.description
      });
    }
    if (symptoms.length) {
      prefillFormData();
    }
  }, [symptoms, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate({id, ...formData, user_id: currentUser.id, illness_id: ill_id } );
      history.push('/')
    }}>
      <h3>Edit Food</h3>
      <label>Name:
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
