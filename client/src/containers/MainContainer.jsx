import React from 'react';
import Illnesses from '../screens/Illnesses';
import { useState, useEffect, Route } from 'react-router-dom';
import getAllIllnesses from '../services/illnesses'

function MainContainer() {
  const [illnesses, setIllnesses] = useState([]);

  useEffect(() => {
    const fetchIllnesses = async () => {
      const illnessesList = await getAllIllnesses();
      setIllnesses(illnessesList);
    }
    fetchFoods();
  }, [])
  return (
    <div>
      <Route path='/'>
        <Illnesses illnesses={illnesses} />
        </Route>
    </div>
  )
}

export default MainContainer
