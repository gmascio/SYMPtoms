import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <nav>
        <div className="nav">
          <div className= "logos">
        <img className='logo' src="https://i.ibb.co/CWyQhfK/d208e06b-891b-468d-9c61-f8f2c0ee7c4a-200x200-1.png" alt="symptoMate logo" border="0"/>
            <Link to='/'><h1 id="title">SymptoMate</h1></Link>
          </div>
          <div className="users">
        {
          currentUser ?
          <>
              <p>Welcome, {currentUser.username}</p>
            
              <p className= "logout-button" onClick={handleLogout}>Logout</p>
            </>
            :
            <Link to='/login'>Login/SignUp</Link>
          }
          
          </div>
      </div>
      </nav>
      {props.children}
      
    </div>
  )
}