import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
import './signup.css'

const Signup = () => {
    const API_URL = import.meta.env.VITE_API_URL;

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const [isChecked, setIsChecked] = useState(false);


    const navigate = useNavigate();
    const { storetokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(user)
            });
            const res_data = await response.json();
            console.log("Response from server ", res_data.message)
            if (response.ok) {
                toast.success(res_data.message)
                storetokenInLS(res_data.token);
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                },
                    navigate("/")
                )
            }
            else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }
        } catch (error) {
            console.log("Register", error)
        }
    }


    return (
        <div className='min-h-screen bg-[#fdefe8] flex justify-center items-center'>
            <div className='bg-white w-[26vw] pb-10' id='signup'>
                <img src="/images/login.webp" className='mb-10' alt="" />
                <div >
                    <form onSubmit={handleSubmit} className='px-4 space-y-5'>
                        <div>
                            <span className='font-bold text-lg'>Signup </span>
                        </div>
                        <div>
                            <input type="text" name='username' id='username' value={user.username} onChange={handleInput} required autoComplete='off' placeholder='Enter username' className='text-sm px-2 py-2 border border-gray-300 w-full  outline-none' />
                        </div>
                        <div>
                            <input type="email" name='email' id='email' value={user.email} onChange={handleInput} required autoComplete='off' placeholder='Enter Your Email' className='text-sm px-2 py-2 border border-gray-300 w-full  outline-none' />
                        </div>
                        <div className='text-sm px-5  border border-gray-300 w-full  '>
                            <span className='text-gray-500'>+91 |</span>
                            <input type="number" name='phone' id='phone' value={user.phone} onChange={handleInput} required autoComplete='off' placeholder='Mobile Your Phone' className='text-sm px-2 py-2  outline-none' />
                        </div>
                        <div>
                            <input type="password" name='password' id='password' value={user.password} onChange={handleInput} required autoComplete='off' placeholder='Enter Your Password' className='text-sm px-2 py-2 border border-gray-300 w-full  outline-none' />
                        </div>

                        <div>
                            <input type="checkbox" name="policy" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                            <span className='px-3 text-sm font-bold text-[#464959]'>By continuting, I agree to the <span className='text-[#ff4777]'>Terms of Use</span> & <span className='text-[#ff4777]'>Privacy Policy</span> and I am above 18 years old.</span>
                        </div>
                        <div className='text-[#ff4777] font-bold text-sm'><NavLink to="/login">Login</NavLink></div>
                        <button type='submit' className={`text-white font-bold w-full py-3 cursor-pointer ${isChecked ? "bg-[#ff4777]" : "bg-[#93959e] cursor-not-allowed"}`}
                            disabled={!isChecked}>
                            CONTINUE
                        </button>

                        <span className='text-sm text-[#464959]'>Have trouble logging in ? <span className='text-[#ff4777] font-bold'>Get help</span></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup

