import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import { selectCurrentToken } from "./authenticationSlice";

import React from 'react'

const RequireAuth = () => {

    const token = useSelector(selectCurrentToken)
    const location = useLocation()

  return (
    token ?
        <Outlet /> :
        <Navigate to="/login" state={{ from : location}} replace />
  )
}

export default RequireAuth