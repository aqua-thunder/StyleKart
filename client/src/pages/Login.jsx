import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';

import './login.css'
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const { storetokenInLS } = useAuth();
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:7000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            // console.log("Login form", response)
            // const res_data = await response.json();


            const res_data = await response.json();
            console.log("Response from server ", res_data.message)
            if (response.ok) {
                // toast.success("Login successfuly");
                // storetokenInLS(res_data.token)


                toast.success(res_data.message)
                storetokenInLS(res_data.token);
                setUser({
                    email: "",
                    password: ""
                },
                    navigate("/"))
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (error) {
            console.log("Login", error)
        }
    }
    return (
        <div className='min-h-screen bg-[#fdefe8] flex justify-center items-center' >
            <div className='bg-white w-[26vw] pb-10' id='login'>
                <img src="../../images/login.webp" className='mb-10' alt="" />
                <form onSubmit={handleSubmit} className='px-10 space-y-5'>
                    <div>
                        <span className='font-bold text-lg'>Login </span>
                    </div>
                    <div>
                        <input type="email" name='email' id='email' value={user.username} onChange={handleInput} required autoComplete='off' placeholder='Enter your email' className='text-sm px-2 py-2 border border-gray-300 w-full  outline-none' />
                    </div>
                    <div>
                        <input type="password" name='password' id='password' value={user.password} onChange={handleInput} required autoComplete='off' placeholder='Enter your password' className='text-sm px-2 py-2 border border-gray-300 w-full  outline-none' />
                    </div>
                    <button type='submit' className='bg-[#ff4777] text-white font-bold w-full py-3 cursor-pointer'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
