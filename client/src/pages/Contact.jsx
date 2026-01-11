import React from 'react'
import { useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
import './contact.css'

const defaultContactFormData = {
    username: "",
    email: "",
    message: ""
}
const Contact = () => {
    const API_URL = import.meta.env.VITE_API_URL;

    const [contact, setContact] = useState(defaultContactFormData);
    const [userData, setUserData] = useState(true)
    const { user } = useAuth();
    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: ""
        });
        setUserData(false)
    }
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({
            ...contact,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            });
            if (response.ok) {
                setContact(defaultContactFormData)
                const data = await response.json();
                console.log(data)
                toast.success("Message send successfuly");

            }
        } catch (error) {

        }
    }
    return (
        <>
            <div>
                <div className='flex w-[65%] m-auto py-10' id='contact'>
                    <div className='w-[40%]' id='help_center'>
                        <h2 className='font-bold text-lg tracking-[.10em]'>HELP CENTER</h2>
                        <span className='text-sm text-gray-500'>We are here to help you</span>
                    </div>
                    <div className='w-[100%]'>
                        <div className='border border-gray-300 flex justify-between items-center p-3' id='orders'>
                            <div className='flex space-x-3'>
                                <div>
                                    <img src="../../images/SVG/bag.svg" width={35} alt="bag" />
                                </div>
                                <div>
                                    <h2 className='text-[11px] font-bold '>TRACK, CANCLE, RETURN/EXCHANGE</h2>
                                    <span className='text-[10px] text-gray-500'>Manage you purchages</span>
                                </div>
                            </div>
                            <div className='right-3' id='btn'>
                                <button className='border border-[#14cead] text-[#14cead] py-3 px-6 rounded-md text-[10px] font-bold tracking-[.10em] cursor-pointer hover:bg-[#def8f3]'>ORDERS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line bg-gray-200 w-[65%] h-[1px] m-auto"></div>
                <div className='flex w-[65%] m-auto py-10' id='query'>
                    <div className='w-[45%]'>
                        <ul className='text-[13px] space-y-6 font-bold text-gray-500' id='quries'>
                            <div className='flex items-center justify-between'>
                                <li className='text-black cursor-pointer'>SELECT QUERY TYPE</li>
                                <img src="../../images/right-arrow.svg" className='mr-8' width={18} alt="" />
                            </div>
                            <div className='flex items-center justify-between'>
                                <li className='cursor-pointer'>Order Related Queries</li>
                                <img src="../../images/right-arrow.svg" className='mr-8' width={18} alt="" />
                            </div>
                            <div className='flex items-center justify-between'>
                                <li className='cursor-pointer'>Non-order Related Issues</li>
                                <img src="../../images/right-arrow.svg" className='mr-8' width={18} alt="" />
                            </div>
                            <div className='flex items-center justify-between'>
                                <li className='cursor-pointer'>Recent Issues</li>
                                <img src="../../images/right-arrow.svg" className='mr-8' width={18} alt="" />
                            </div>
                            <div className="line bg-gray-200 w-[90%] start-0 h-[1px] m-auto"></div>

                            <div className='flex items-center justify-between mt-5'>
                                <li className=' cursor-pointer'>Frequenty Asked Question</li>
                                <img src="../../images/right-arrow.svg" className='mr-8' width={18} alt="" />
                            </div>
                        </ul>
                    </div>
                    <div className="line h-[40vw] bg-gray-200 w-[1px]"></div>
                    <div className='w-[100%] mx-10 bg-[#f5f5f5] p-5' id='messag'>
                        <h1 className='text-gray-500 font-bold text-xs'>Enter your message</h1>
                        <form onSubmit={handleSubmit} className='bg-white p-3 mt-3 space-y-7'>
                            <div className='space-y-3'>
                                <input type="text" name='username' id='username' value={contact.username} onChange={handleInput} placeholder='Enter your name' required autoComplete='off' className='text-sm px-2 py-2 border border-gray-300 w-full  outline-none' />
                            </div>
                            <div className='space-y-3'>
                                <input type="email" name='email' id='email' value={contact.email} onChange={handleInput} placeholder='Enter your email' required autoComplete='off' className='text-sm px-2 py-2 border border-gray-300 w-full  outline-none' />
                            </div>
                            <div className='space-y-3'>
                                <textarea name="message" id="message" value={contact.message} onChange={handleInput} required autoComplete='off' rows={10} placeholder='Type your message here' className='text-sm px-2 py-2 border border-gray-300 w-full  outline-none'></textarea>
                            </div>
                            <button type='submit' className='bg-[#93959e] text-white font-bold w-full py-3 cursor-pointer hover:bg-[#ff3f6c]'>CONTINUE</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
