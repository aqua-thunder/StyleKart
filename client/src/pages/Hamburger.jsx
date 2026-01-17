import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../store/auth'

const Hamburger = (props) => {
    const [Home, setHome] = useState();
    const { isLoggedIn } = useAuth();
    const { user } = useAuth();
    if (props.element) {
        const element = document.getElementById('hamburger')
        element.style.width = props.width
        element.style.minHeight = props.minHeight;
        element.style.transition = props.transition;
    }
    const FilterClose = () => {
        const element = document.getElementById('hamburger')
        const home = document.getElementById('home')
        if (element) {
            element.style.width = "0vw"
            element.style.minHeight = "0vh"
            element.style.transition = "0.3s"
        }
        if (home) {
            home.style.filter = "blur(0px)"
        }
        <Home home={home} />
    }
    return (
        <div>
            <div className='w-0 h-0 left-0 overflow-x-hidden fixed bg-white z-20' id='hamburger'>
                <div className='flex justify-between items-center py-10 px-8 bg-[#3f3947]'>
                    {
                        isLoggedIn
                            ?
                            (<h1 className='text-center text-[21px] text-white'>{user.username}</h1>)
                            :
                            (<h1 className='text-center text-[21px] text-white'>Account</h1>)

                    }
                    <img onClick={FilterClose} className='bg-gray-900 rounded-full invert w-5 cursor-pointer' src="/images/SVG/cross.svg" alt="" />
                </div>
                <ul className='  border border-gray-200 flex flex-col rounded-lg space-y-5  py-7  text-sm font-semibold '>
                    <NavLink to="/men" onClick={FilterClose} className='cursor-pointer border-b-2 border-gray-200 py-5 pl-8'>Men</NavLink>
                    <NavLink to="/women" onClick={FilterClose} className='cursor-pointer border-b-2 border-gray-200 py-5 pl-8'>Women</NavLink>
                    <NavLink to="/kids" onClick={FilterClose} className='cursor-pointer  border-b-2 border-gray-200 py-5 pl-8'>Kids</NavLink>
                    <NavLink to="/beauty" onClick={FilterClose} className='cursor-pointer  border-b-2 border-gray-200 py-5 pl-8'>Beauty</NavLink>
                    <NavLink to="/genz" onClick={FilterClose} className='cursor-pointer border-b-2 border-gray-200 py-5 pl-8'>Genz</NavLink>
                    <NavLink to="/wishlist" onClick={FilterClose} className='cursor-pointer  border-b-2 border-gray-200 py-5 pl-8'>Wishlist</NavLink>
                    <NavLink to="/cart" onClick={FilterClose} className='cursor-pointer  border-b-2 border-gray-200 py-5 pl-8'>Cart</NavLink>
                    <NavLink to="/contact" onClick={FilterClose} className='cursor-pointer border-b-2 border-gray-200 py-5 pl-8'>Contact Us</NavLink>
                    <NavLink to="/orders" onClick={FilterClose} className='cursor-pointer  border-b-2 border-gray-200 py-5 pl-8'>Orders</NavLink>
                    <NavLink to="/myntraMail" onClick={FilterClose} className='cursor-pointer  border-b-2 border-gray-200 py-5 pl-8'>Mall</NavLink>
                    <NavLink to="/myntraInsiders" onClick={FilterClose} className='cursor-pointer  border-b-2 border-gray-200 py-5 pl-8'>Insiders</NavLink>
                    <NavLink to="/FAQ" onClick={FilterClose} className='cursor-pointer  border-b-2 border-gray-200 py-5 pl-8'>FAQs</NavLink>
                    <NavLink to="/legal" onClick={FilterClose} className='cursor-pointer border-b-2 border-gray-200 py-5 pl-8'>Legal</NavLink>
                    <NavLink to="" className='cursor-pointer border-b-2 border-gray-300 py-2 pl-4'>Virtual Try On</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger
