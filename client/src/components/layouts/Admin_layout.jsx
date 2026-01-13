import React from 'react'
import { BrowserRouter, Navigate, NavLink, Outlet, Route } from 'react-router-dom'
import { useAuth } from '../../store/auth'

const Admin_layout = () => {
  const { user, isLoading } = useAuth();
  console.log("Admin Layout", user)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 h-screen">
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></span>
      </div>)
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />
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


