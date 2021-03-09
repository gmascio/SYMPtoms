import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneIllness } from '../services/illnesses';
import { Link } from 'react-router-dom';

export default function IllnessDetail(props) {
  const [illnessItem, setIllnessItem] = useState(null);
  // const [selectedFlavor, setSelectedFlavor] = useState('')
  const { id } = useParams();
  const { symptoms } = props;
  const { currentUser } = props;
  const { illnesses } = props;
  const { handleDelete } = props;
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
        <div>
               {
          currentUser ?
          <>
              <Link to='/symptom/new'>Add a Symptom</Link>
            </>
            :
            <Link to='/login'>Login/SignUp</Link>
          }
          </div>
        <h3>{illnessItem?.name}</h3>
        <p>{illnessItem?.description}</p>
        {illnessItem?.symptoms.map((symptom) => (
        <React.Fragment key ={symptom.id}>
          <p key={symptom.id}>{symptom.description}</p>
          <>
              <button>edit</button>
              <button onClick={() => handleDelete(symptom.id)}>delete</button>
            </>
            </React.Fragment>
            
        
            
        ))}
      </div>
    )
  }

