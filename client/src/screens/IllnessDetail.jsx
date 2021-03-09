import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getOneIllness} from '../services/illnesses'

export default function IllnessDetail(props) {
  const [illnessItem, setIllnessItem] = useState(null);
  // const [selectedFlavor, setSelectedFlavor] = useState('')
  const { id } = useParams();
  const { symptoms } = props;
  useEffect(() => {
    const fetchIllnessItem = async () => {
      const illnessData = await getOneIllness(id);
      setIllnessItem(illnessData);
    }
    fetchIllnessItem();
  }, [id])

    // const handleChange = (e) => {
    //   const { value } = e.target;
    //   setSelectedSymptom(value);
    // }

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const illnessData = await addFoodToFlavor(selectedFlavor, id);
    //   setFoodItem(foodData);
    // }
    // }, [id])

    return (
      <div>
        <h3>{illnessItem?.name}</h3>
        <p>{illnessItem?.description}</p>
        {illnessItem?.symptoms.map((symptom) => (
          <p key={symptom.id}>{symptom.description}</p>
        ))}
      </div>
    )
  }

