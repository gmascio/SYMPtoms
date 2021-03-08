import React from 'react';
import Illnesses from '../screens/Illnesses';
import { useState, useEffect} from 'react';
import { Route , useHistory} from 'react-router-dom';
import { getAllIllnesses } from '../services/illnesses';
import { destroySymptom, getAllSymptoms, postSymptom, putSymptom } from '../services/symptoms';

function MainContainer() {
  const [illnesses, setIllnesses] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchIllnesses = async () => {
      const illnessesList = await getAllIllnesses();
      setIllnesses(illnessesList);
    }
    fetchIllnesses();
  }, [])
  useEffect(() => {
    const fetchSymptoms = async () => {
      const symptomsList = await getAllSymptoms();
      setSymptoms(symptomsList);
    }
    fetchSymptoms();
  }, [])

  const handleCreate = async (formData) => {
    const newSymptom = await postSymptom(formData);
    setSymptoms(prevState => [...prevState, newSymptom]);
    history.push('/');
  }

  const handleDelete = async (id) => {
    await destroySymptom(id);
    setSymptoms(prevState => prevState.filter((symptom) => symptom.id !== id))
  }

  const handleUpdate = async (id, formData) => {
    const updatedSymptom = await putSymptom(id, formData);
    setSymptoms(prevState => prevState.map((symptom) => {
      return symptom.id === Number(id) ? updatedSymptom : symptom
    }));
    history.push('/');
  }
  return (
    <div>
      <Route path='/'>
        <Illnesses illnesses={illnesses} />
        </Route>
    </div>
  )
}

export default MainContainer
