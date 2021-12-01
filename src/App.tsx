import React, { Fragment, useState } from 'react'
import './App.css'
// Router
import { Route, Routes } from 'react-router-dom';


// Login page
import { LoginPage, ProfilePage, RegisterPage, HomePage } from './features';


type UserToken = string | null;


function App() {
  // Go to login if user is not logged in
  const [userToken, setUserToken] = useState<UserToken>("test");


  


  const loginPage = <LoginPage setUserToken={setUserToken} />;
  const registerPage = <RegisterPage></RegisterPage>;
  const tempProfile = <div>Profile page</div>;
  const tempHome = <div>Home page</div>;
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
              <Route path='/' element={<HomePage />}>
                <Route path='/' element={tempHome} />
                <Route path='/profile' element={tempProfile} />
              </Route>
            </Fragment>
          )
      }
    </Routes>
  )
}

export default App
