import React, { Fragment, useState } from 'react'
import './App.css'
// Router
import { Route, Routes } from 'react-router-dom';


// Login page
import { LoginPage, ProfilePage, RegisterPage } from './features';


type UserToken = string | null;


function App() {
  // Go to login if user is not logged in
  const [userToken, setUserToken] = useState<UserToken>("True");


  const tempHome = <div>Matchsic home</div>;


  const loginPage = <LoginPage setUserToken={setUserToken}/>;
  const registerPage = <RegisterPage></RegisterPage>;


  return (
    <Routes>
      {
        !userToken ? // User is NOT logged in
          (
            <Fragment>
              <Route path='/' element={loginPage} />
              <Route path='/register' element={registerPage} />
            </Fragment>
          )
        :
          ( // User is logged in
            <Fragment>
              <Route path='/' element={tempHome} />
              <Route path='/profile' element={<ProfilePage />}/>
            </Fragment>
          )
      }
    </Routes>
  )
}

export default App
