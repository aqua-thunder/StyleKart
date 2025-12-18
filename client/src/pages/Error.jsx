import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
                {/* 404 Number */}
                <h1 className="text-9xl font-extrabold text-pink-600 tracking-widest">404</h1>

                {/* Message */}
                <div className="bg-pink-100 px-6 py-3 text-lg font-semibold rounded-full mt-4 shadow-md">
                    Oops! Page not found
                </div>

                {/* Description */}
                <p className="mt-6 text-gray-600 text-center max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Return to Home Button */}
                <Link
                    to="/"
                    className="mt-8 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full shadow-lg transition duration-300"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    )
}

export default Error
