import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneIllness } from '../services/illnesses';
import { Link } from 'react-router-dom';
import SymptomCreate from './SymptomCreate';

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
      <div className= "illness-detail">
        
        <div className='illness-cards'>
          <h3 className='illness-title'>{illnessItem?.name}</h3>
          <img className='illness-detail-image' src={illnessItem?.image}/>
          <div >
               {
          currentUser ?
          <>
                <Link to={`/symptom/new/${illnessItem?.id}`}><button className='button'>Add a Symptom</button></Link>
            </>
            :
            ""
          }
        </div>
          <p>{illnessItem?.description}</p>
        </div>
        
        
        {illnessItem?.symptoms.map((symptom) => (
        <div className= 'symptom-card'>
          <React.Fragment key={symptom.id}>
          <p className= 'symptom-description' key={symptom.id}>{symptom.description}</p>
          <>
              <Link to={`/symptom/edit/${symptom.id}`}><button className='edit'>edit</button></Link>
              <button className='edit' onClick={() => handleDelete(symptom.id)}>delete</button>
            </>
            </React.Fragment>
            
        
            
          </div>
        ))}
      </div>
    )
  }

