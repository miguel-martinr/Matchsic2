import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

export const NotLogged = () => {

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, [])

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
