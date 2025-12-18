import React from 'react'
import { NavLink } from 'react-router-dom'

const Hamburger = (props) => {
    if (props.element) {
        const element = document.getElementById('hamburger')
        element.style.width = props.width
        element.style.minHeight = props.minHeight;
        element.style.transition = props.transition;
    }
    const FilterClose = () => {
        const element = document.getElementById('hamburger')
        if (element) {
            element.style.width = "0vw"
            element.style.minHeight = "0vh"
            element.style.transition = "0.3s"
        }
    }
    return (
        <div>
            <div className='w-0 h-0 left-0 overflow-x-hidden fixed bg-white z-20' id='hamburger'>
                <div className='p-5' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-center text-[21px]'>Account</h1>
                        <img onClick={FilterClose} className='bg-gray-900 rounded-full invert w-5 cursor-pointer' src="../images/SVG/cross.svg" alt="" />
                    </div>
                    <ul className='  border border-gray-200 rounded-lg space-y-10 mt-5 py-7 pl-7 text-sm font-semibold '>
                        <li className='cursor-pointer'><NavLink to="/men">Men</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/women">Women</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/kids">Kids</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/beauty">Beauty</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/genz">Genz</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/studio">Studio</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/wishlist">Wishlist</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/cart">Cart</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/account">Account</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/orders">Orders</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/myntraMail">Mall</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/myntraInsiders">Insiders</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/contact">Contact Us</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/FAQ">FAQs</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/legal">Legal</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="">Virtual Try On</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
