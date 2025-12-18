import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { useEffect } from 'react';

const Logout = () => {
    const { LogoutUser } = useAuth();
    useEffect(() => {
        LogoutUser()
    }, [LogoutUser])

    return (
        <Navigate to={"/Login"} />
    )
}

export default Logout
