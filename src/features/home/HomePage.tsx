import React, { Fragment } from 'react'
import { Outlet, Route, useNavigate } from 'react-router'
import { Link, Routes } from 'react-router-dom';
import { TopBar } from '../TopBar';

export const HomePage = () => {

  const tempTopBar = <div>top bar</div>;
  const tempNavBar = <div>bottom bar</div>;
  
  
  return (
    <Fragment>
      {/*TopBar*/}
      <TopBar></TopBar>

      

      <Outlet />


      {/*NavBar*/}

      {tempNavBar}
    </Fragment>
  )
}
