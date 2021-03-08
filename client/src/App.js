import logo from './logo.svg';
import './App.css';
import Layout from './layouts/Layout';
import { Switch, Route } from 'react-router-dom'
import Login from './screens/Login';
import Register from './screens/Register';
import MainContainer from './containers/MainContainer.jsx';


function App() {
  return (
    <>
      <Layout />
      <Switch>
        <Route path='/login'>
         <Login/>
        </Route>
        <Route path= '/register'>
          <Register/>
        </Route>
        <Route path= '/'>
          <MainContainer/>
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
