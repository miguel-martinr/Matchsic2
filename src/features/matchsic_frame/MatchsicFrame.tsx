import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { userService } from '../_services';
import { BottomBar } from './BottomBar';
import { TopBar } from './TopBar';

export const MatchsicFrame = () => {
  const navigate = useNavigate();

  useEffect(() => {
    userService.getData().then(data => { });
    navigate('/home');
  }, []);

  return (
    <Fragment>
      {/*TopBar*/}
      <TopBar></TopBar>


      <div className='pt-5'>
        <Outlet />
      </div>


      {/*NavBar*/}

      <BottomBar></BottomBar>
    </Fragment>
  )
}
