import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Beauty from './pages/Beauty'
import Genz from './pages/Genz'
import Studio from './pages/Studio'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Logout from './pages/Logout'
import Service from './pages/Service'
import Footer from './components/Footer'
import Admin_layout from './components/layouts/Admin_layout'
import Admin_users from './pages/Admin_users'
import Admin_contacts from './pages/Admin_contacts'
import Admin_Update from './pages/Admin_Update'
import Product from './pages/Product'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'

const App = () => {

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}


const AppContent = () => {

  const location = useLocation();

  // Check if the current path starts with '/admin'
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Women />} />
        <Route path='/Kids' element={<Kids />} />
        <Route path='/Beauty' element={<Beauty />} />
        <Route path='/Genz' element={<Genz />} />
        <Route path='/Studio' element={<Studio />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<Error />} />
        <Route path='/admin' element={<Admin_layout />}>
          <Route path='users' element={<Admin_users />} />
          <Route path='contacts' element={<Admin_contacts />} />
          <Route path="users/:id/edit" element={<Admin_Update />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
