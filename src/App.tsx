import React, { Fragment, useState } from 'react'
import './App.css'
// Router
import { Route, Routes } from 'react-router-dom';


// Login page
import { LoginPage, ProfilePage, RegisterPage, HomePage } from './features';


type UserToken = string | null;


function App() {
  // Go to login if user is not logged in
  const [userToken, setUserToken] = useState<UserToken>(null);


  const loginPage = <LoginPage setUserToken={setUserToken} />;
  const registerPage = <RegisterPage></RegisterPage>;
  const tempMap = <div>Home Map</div>;
  return (
    <Routes>
      {
        !userToken ? // User is NOT logged in
          (
            <Fragment>
              <Route path='/login' element={loginPage} />
              <Route path='/register' element={registerPage} />
            </Fragment>
          )
          :
          ( // User is logged in
            <Fragment>
              <Route path='/' element={<HomePage />}>
                <Route path='/home' element={tempMap} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Fragment>
          )
      }
    </Routes>
  )
}

export default App
