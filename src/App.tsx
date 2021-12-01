import React, { useState } from 'react'
import './App.css'
// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Login page
import { LoginPage } from './features';


type UserToken = string | null;


function App() {
  // Go to login if user is not logged in
  const [userToken, setUserToken] = useState<UserToken>(null);

  if (!userToken) {
    return <LoginPage setUserToken={setUserToken}/>;
  }


  const tempHome = <div>Matchsic home</div>;

  return (
    <Router>
      <Routes>
        <Route path='/' element={tempHome} />
      </Routes>
    </Router>
  )
}

export default App
