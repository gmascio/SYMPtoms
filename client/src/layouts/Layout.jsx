import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <header>
        <Link to='/'><h1>SymptoMate</h1></Link>
        {
          currentUser ?
          <>
              <p>Welcome, {currentUser.username}</p>
              <Link to='/addsymptom'>Add a Symptom</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/SignUp</Link>
          }
          
        <hr />
      </header>
      {props.children}
    </div>
  )
}