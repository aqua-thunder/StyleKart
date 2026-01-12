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
                        <img onClick={FilterClose} className='bg-gray-900 rounded-full invert w-5 cursor-pointer' src="/images/SVG/cross.svg" alt="" />
                    </div>
                    <ul className='  border border-gray-200 flex flex-col rounded-lg space-y-10 mt-5 py-7 pl-7 text-sm font-semibold '>
                        <NavLink to="/men" onClick={FilterClose} className='cursor-pointer'>Men</NavLink>
                        <NavLink to="/women" onClick={FilterClose} className='cursor-pointer'>Women</NavLink>
                        <NavLink to="/kids" onClick={FilterClose} className='cursor-pointer'>Kids</NavLink>
                        <NavLink to="/beauty" onClick={FilterClose} className='cursor-pointer'>Beauty</NavLink>
                        <NavLink to="/genz" onClick={FilterClose} className='cursor-pointer'>Genz</NavLink>
                        <NavLink to="/wishlist" onClick={FilterClose} className='cursor-pointer'>Wishlist</NavLink>
                        <NavLink to="/cart" onClick={FilterClose} className='cursor-pointer'>Cart</NavLink>
                        <NavLink to="/account" onClick={FilterClose} className='cursor-pointer'>Account</NavLink>
                        <NavLink to="/orders" onClick={FilterClose} className='cursor-pointer'>Orders</NavLink>
                        <NavLink to="/myntraMail" onClick={FilterClose} className='cursor-pointer'>Mall</NavLink>
                        <NavLink to="/myntraInsiders" onClick={FilterClose} className='cursor-pointer'>Insiders</NavLink>
                        <NavLink to="/contact" onClick={FilterClose} className='cursor-pointer'>Contactli</NavLink>
                        <NavLink to="/FAQ" onClick={FilterClose} className='cursor-pointer'>FAQs</NavLink>
                        <NavLink to="/legal" onClick={FilterClose} className='cursor-pointer'>Legal</NavLink>
                        <NavLink to="" className='cursor-pointer'>Virtual Try On</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
