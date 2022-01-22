import React, { Fragment, useState } from 'react'
import './App.css'
// Router
import { Route, Routes } from 'react-router-dom';


// Login page
import { LoginPage, ProfilePage, RegisterPage } from './features/utils';

import { NotificationPage } from './features/notifications/NotificationPage';
import { useAppSelector } from './features/store/hooks';
import { HomePage } from './features/home/HomePage';
import { NotLogged } from './features/utils/NotLogged';
import { MatchsicFrame } from './features/matchsic_frame';





function App() {
  // Go to login if user is not logged in


  const userIsLoggedIn = useAppSelector(state => state.matchsic.userIsLoggedIn);

  const loginPage = <LoginPage />;
  const registerPage = <RegisterPage></RegisterPage>;

  return (
    <Routes>
      {
        !userIsLoggedIn ? // User is NOT logged in
          (
            <Fragment>
              <Route path='/' element={<NotLogged />}>
                <Route path='/login' element={loginPage} />
                <Route path='/register' element={registerPage} />
              </Route>
            </Fragment>
          )
          :
          ( // User is logged in
            <Fragment>
              <Route path='/' element={<MatchsicFrame />}>
                <Route path='/home' element={<HomePage />} />
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
