import React from 'react'
import { BrowserRouter, Navigate, NavLink, Outlet, Route } from 'react-router-dom'
import {useAuth} from '../../store/auth'

const Admin_layout = () => {
  const {user, isLoading} = useAuth();
  console.log("Admin Layout" , user)

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  return (
    <>
      <div>
        <ul className='flex items-center shadow shadow-gray-400 space-x-10 py-5 p-5'>
          <li><NavLink to={"/admin/users"}>Users</NavLink></li>
          <li><NavLink to={"/admin/contacts"}>Contacts</NavLink></li>
          <li><NavLink>Services</NavLink></li>
          <li><NavLink to={"/"}>Home</NavLink></li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Admin_layout


