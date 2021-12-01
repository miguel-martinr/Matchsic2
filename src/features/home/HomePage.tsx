import React, { Fragment } from 'react'
import { Outlet, Route, useNavigate } from 'react-router'
import { Link, Routes } from 'react-router-dom';

export const HomePage = () => {

  const tempTopBar = <div>top bar</div>;
  const tempNavBar = <div>bottom bar</div>;
  
  
  return (
    <Fragment>
      {/*TopBar*/}
      {tempTopBar}

      

      <Outlet />


      {/*NavBar*/}

      {tempNavBar}
    </Fragment>
  )
}
