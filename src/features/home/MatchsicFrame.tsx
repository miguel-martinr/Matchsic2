import React, { Fragment } from 'react'
import { Outlet } from 'react-router'
import { BottomBar } from '../BottomBar';
import { TopBar } from '../TopBar';

export const MatchsicFrame = () => {

  
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
