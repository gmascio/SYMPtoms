import React from "react";
import Illnesses from "../screens/Illnesses";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { getAllIllnesses } from "../services/illnesses";
import {
  destroySymptom,
  getAllSymptoms,
  postSymptom,
  putSymptom,
} from "../services/symptoms";
import IllnessDetail from "../screens/IllnessDetail";
import Symptoms from "../screens/Symptoms";
import SymptomCreate from "../screens/SymptomCreate";
import SymptomEdit from "../screens/SymptomEdit";

function MainContainer(props) {
  const [illnesses, setIllnesses] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchIllnesses = async () => {
      const illnessesList = await getAllIllnesses();
      setIllnesses(illnessesList);
    };
    fetchIllnesses();
  }, []);
  useEffect(() => {
    const fetchSymptoms = async () => {
      const symptomsList = await getAllSymptoms();
      setSymptoms(symptomsList);
    };
    fetchSymptoms();
  }, []);

  const handleCreate = async (formData) => {
    const newSymptom = await postSymptom(formData);
    setSymptoms((prevState) => [...prevState, newSymptom]);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroySymptom(id);
    setSymptoms((prevState) =>
      prevState.filter((symptom) => symptom.id !== id)
    );
  };

  const handleUpdate = async (id, formData) => {
    const updatedSymptom = await putSymptom(id, formData);
    setSymptoms((prevState) =>
      prevState.map((symptom) => {
        return symptom.id === Number(id) ? updatedSymptom : symptom;
      })
    );
    history.push("/");
  };
  return (
    <div>
      <Switch>
        <Route path="/illnesses/:id">
          <IllnessDetail symptoms={symptoms} currentUser={currentUser} illnesses={illnesses} handleDelete={handleDelete}/>
        </Route>
        <Route path="/symptom/new/:illness_id">
          <SymptomCreate handleCreate={handleCreate} currentUser={currentUser} illnesses={illnesses}/>
        </Route>
        <Route path="/symptoms">
          <Symptoms symptoms={symptoms} handleDelete={handleDelete} />
        </Route>
        <Route>
          <SymptomEdit path= '/symptom/edit/:id/'/>
        </Route>
        <Route path="/">
          <Illnesses illnesses={illnesses} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;
