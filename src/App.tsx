import React, { Fragment, useState } from 'react'
import './App.css'
// Router
import { Route, Routes } from 'react-router-dom';


// Login page
import { LoginPage, ProfilePage, RegisterPage, MatchsicFrame } from './features/utils';
import { NotificationPage } from './features/notifications/NotificationPage';
import { useAppSelector } from './features/store/hooks';





function App() {
  // Go to login if user is not logged in
  
  
  const userIsLoggedIn = useAppSelector(state => state.matchsic.userIsLoggedIn);

  const loginPage = <LoginPage/>;
  const registerPage = <RegisterPage></RegisterPage>;
  const tempMap = <div style={{height: '100vh'}}>Home Map</div>;
  return (
    <Routes>
      {
        !userIsLoggedIn ? // User is NOT logged in
          (
            <Fragment>
              <Route path='/login' element={loginPage} />
              <Route path='/register' element={registerPage} />
            </Fragment>
          )
          :
          ( // User is logged in
            <Fragment>
              <Route path='/' element={<MatchsicFrame />}>
                <Route path='/home' element={tempMap} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/notifications' element={<NotificationPage />} />
              </Route>
            </Fragment>
          )
      }
    </Routes>
  )
}

export default App
