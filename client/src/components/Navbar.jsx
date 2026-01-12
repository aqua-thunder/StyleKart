import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { useState } from 'react'
import './Navbar.css'
import Hamburger from '../pages/Hamburger'

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [hamburger, setHamburger] = useState()
  const { user } = useAuth();
  const profileIn = () => {
    const element = document.getElementById("profileTable")
    if (element) {
      element.style.width = "20vw"
      element.style.minHeight = "63vh"
      element.style.paddingLeft = "2vw"
      element.style.paddingTop = "2vw"
    }
  }
  const profileOut = () => {
    const element = document.getElementById("profileTable")
    if (element) {
      element.style.width = "0vw"
      element.style.height = "0vh"
      element.style.paddingLeft = "0vw"
      element.style.paddingTop = "0vw"
    }
  }
  const hamburgerOn = () => {

    const navbar = document.getElementById('navbar')
    navbar.style.overflow = "hidden"

    const element = document.getElementById('hamburger')
    if (element) {
      element.style.width = "60vw"
      element.style.minHeight = "100%"
      element.style.transition = "0.3s"
    }
    <Hamburger hamburger={hamburger} />
  }

  return ( 
    <>
      <header className='sticky top-0 z-10 bg-white'>
        <div className=" container px-10 shadow-md shadow-black-600/50" id='navbar'>
          <Hamburger />
          <nav className='flex items-center text-sm '>
            <NavLink to="/"><img src="../../public/images/SVG/hamburger_menu.svg" onClick={hamburgerOn} className='w-[7vw] pl-6 pr-14 hidden hamburger' alt="hamburger" /></NavLink>
            <NavLink to="/"><img src="/logo.png" className='w-[10vw] pl-6 pr-14' id='logo' alt="logo" /></NavLink>

            <ul className='bg-[#ffffff] w-[50%] flex  items-center space-x-10' id='display_none'>
              <li className='font-bold text-[#464959]'><NavLink to="/men">MEN</NavLink></li>
              <li className='font-bold text-[#464959]'><NavLink to="/women">WOMEN</NavLink></li>
              <li className='font-bold text-[#464959]'><NavLink to="/kids">KIDS</NavLink></li>
              <li className='font-bold text-[#464959]'><NavLink to="/beauty">BEAUTY</NavLink></li>
              <li className='font-bold text-[#464959]'><NavLink to="/genz">GENZ</NavLink></li>
              {/* <li className='font-bold text-[#464959]'><NavLink to="/studio">STUDIO</NavLink></li> */}
              <li className='font-bold text-[#464959]' id='home_none' ><NavLink to="/">HOME</NavLink></li>
            </ul>
            <div className='w-[50%] flex items-center justify-between' >
              <input className='bg-[#f5f5f6] w-[30vw] px-3 rounded-sm py-2 display_none outline-none' type="text" placeholder='Search for products, brands and more' name="" />

              <div onMouseOver={profileIn} onMouseOut={profileOut} id='profile'>
                <NavLink to="/signup" >
                  <div className='h-[70px] flex flex-col justify-center items-center space-y-1'>
                    <img src="../../../public/images/SVG/profile.svg" className='w-5' alt="" />
                    <span className='font-bold text-[12px]'>Profile</span>
                  </div>
                </NavLink>
              </div>

              <div className='display_none'>
                <NavLink to="/wishlist">
                  <div className='h-[70px] flex flex-col justify-center items-center space-y-1'>
                    <img src="../../../public/images/SVG/wishlist.svg" className='w-6' alt="" />
                    <span className='font-bold text-[12px]'>Wishlist</span>
                  </div>
                </NavLink>
              </div>

              <div className='display_none'>
                <NavLink to="/cart">
                  <div className='h-[70px] flex flex-col justify-center items-center space-y-1'>
                    <img src="../../../public/images/SVG/cart.svg" className='w-6' alt="" />
                    <span className='font-bold text-[12px]'>Bag</span>
                  </div>
                </NavLink>
              </div>
            </div>
            <div onMouseOver={profileIn} onMouseOut={profileOut} className='shadow shadow-gray-300  w-0 h-0 overflow-x-hidden z-1 fixed top-[69px] right-12 bg-white' id='profileTable'>
              <div className='space-y-2'>
                {
                  isLoggedIn ?
                    (<div>
                      <h2 className='font-bold'>{user.username}</h2>
                      <h2 className='text-gray-800'>{user.email}</h2>
                      <NavLink to="/logout"><button onClick={profileOut} className='text-[#ff3f6c] font-bold border border-gray-200 py-2 px-3 rounded-sm cursor-pointer hover:border-[#ff3f6c]'>Logout</button></NavLink>
                    </div>)
                    :
                    (<div>
                      <h2 className='font-bold'>Welcome</h2>
                      <h2 className='text-gray-800'>To access acount and manage orders</h2>
                      <NavLink to="/signup"><button onClick={profileOut} className='text-[#ff3f6c] font-bold border border-gray-200 py-2 px-3 rounded-sm cursor-pointer hover:border-[#ff3f6c]'>Login/Signup</button></NavLink>
                    </div>)
                }

                {/* {
                  isLoggedIn ?
                    ()
                    :
                    ()
                } */}
              </div>
              <div className="line bg-gray-200 w-full h-[1px]"></div>
              <div>
                <ul className='text-[#656775] space-y-2'>
                  <li className='mt-3 cursor-pointer hover:font-bold'>Orders</li>
                  <li className='cursor-pointer hover:font-bold'>Wishlist</li>
                  <li className='cursor-pointer hover:font-bold'>Gift Cards</li>
                  <li className='cursor-pointer hover:font-bold'><NavLink to="/Contact">Contact us</NavLink></li>
                  <li className='cursor-pointer hover:font-bold'>Myntra Insiders</li>
                  <li className='cursor-pointer hover:font-bold'>Myntra Credit</li>
                  <li className='cursor-pointer hover:font-bold'>Coupons</li>
                  <li className='cursor-pointer hover:font-bold'>Saved Cards</li>
                  <li className='cursor-pointer hover:font-bold'>Saved VPA</li>
                  <li className='cursor-pointer hover:font-bold'>Saved Address</li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
