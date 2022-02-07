import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

export const NotLogged = () => {

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
