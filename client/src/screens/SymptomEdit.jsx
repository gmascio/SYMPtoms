import React from 'react'
import { getOneIllness, getOneSymptom } from '../services/symptoms';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function SymptomEdit(props) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    description: ''
  });
  const { description } = formData;
  const {  symptoms, handleUpdate, currentUser } = props;
  const { id } = useParams();
  
  
  
  const [symptom, setSymptom] = useState('')
  useEffect(() => {
    const fetchSymptom = async () => {
      const singleSymptom = await getOneSymptom(id)
      setSymptom(singleSymptom)
    }
    fetchSymptom()
  },[])
    // console.log(symptom)
    
  useEffect(() => {
    const prefillFormData = () => {
      const symptomItem = symptoms.find((symptom) => symptom.id === Number(id));
      console.log(symptom)
      setFormData({
        description: symptomItem.description
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
    <div className='container'>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate( id, { ...formData, illness_id: symptom.illness_id });
      history.push(`/illness/${id}`)
    }}>
      <h3>Edit Symptom</h3>
      <label>Name:
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
