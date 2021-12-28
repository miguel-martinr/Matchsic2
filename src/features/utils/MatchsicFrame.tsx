import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { BottomBar } from './BottomBar';
import { TopBar } from './TopBar';

export const MatchsicFrame = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.href;

    if (currentPath[currentPath.length - 1] === '/') { // If currentPath is root (/)
      navigate('/home');  
    }
  }, []);

  return (
    <Fragment>
      {/*TopBar*/}
      <TopBar></TopBar>



      <Outlet />


      {/*NavBar*/}

      <BottomBar></BottomBar>
    </Fragment>
  )
}
