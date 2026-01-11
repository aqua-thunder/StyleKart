import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import React from "react";
export const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
    const API_URL = import.meta.env.VITE_API_URL;

    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [services, setServices] = useState([])
    const [deals, setDeals] = useState([])
    const [categories, setCategories] = useState([])
    const [mens, setMens] = useState([])
    const [womens, setWomens] = useState([])
    const [kids, setKids] = useState([])
    const [beauty, setBeauty] = useState([])
    const [genz, setGenz] = useState([])

    const authorizationToken = `Bearer ${token}`
    const storetokenInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem('token', serverToken);
    };

    let isLoggedIn = !!token
    console.log("isLoggedIn", isLoggedIn)

    // Tackling logout functionality
    const LogoutUser = () => {
        setToken("")
        return localStorage.removeItem('token')
    };

    // JWT Authentication - to get the currently loggedIn user data
    const userAuthentication = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${API_URL}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log('user data', data.userData);
                setUser(data.userData);
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        } catch (error) {
            console.log("Error fetching user data");
        }

    }

    // To fetch the services data fromt the databse
    const getServices = async () => {
        try {
            const response = await fetch(`${API_URL}/api/data/service`, {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json()
                setServices(data.msg)
            }
        } catch (error) {
            console.log(`Services fronted error ${error}`);
        }

    }

    // To fetch the deals data fromt he database
    const getDeals = async () => {
        const response = await fetch(`${API_URL}/api/data/deal`, {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            setDeals(data.msg)
        }
    }

    // To fetch the category data from the database
    const getCategories = async () => {
        const response = await fetch(`${API_URL}/api/data/Categorie`, {
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            setCategories(data.msg)
        }
    }
    // To fetch the Mens data from the database
    const getMens = async () => {
        const response = await fetch(`${API_URL}/api/data/men`, {
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            setMens(data.msg)
        }
    }

    // To fetch the Womens data from the database
    const getWomens = async () => {
        const response = await fetch(`${API_URL}/api/data/women`, {
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            setWomens(data.msg)
        }
    }

    // To fetch the Kids data from the database
    const getKids = async () => {
        const response = await fetch(`${API_URL}/api/data/kid`, {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            setKids(data.msg)
        }
    }

    // To fetch the Beauty data from the database
    const getBeauty = async () => {
        const response = await fetch(`${API_URL}/api/data/beauty`, {
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            setBeauty(data.msg)
        }
    }

    // To fetch the Genz data from the database
    const getGenz = async () => {
        const response = await fetch(`${API_URL}/api/data/genz`, {
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            setGenz(data.msg)
        }
    }

    useEffect(() => {
        getServices();
        getDeals();
        getCategories();
        getMens();
        // userAuthentication();
        getWomens();
        getKids();
        getBeauty();
        getGenz();
    }, [])


    useEffect(() => {
        if (token) {
            userAuthentication();
        } else {
            setUser("");
            setIsLoading(false);
        }
    }, [token]);




    return <AuthContext.Provider value={{ isLoggedIn, storetokenInLS, LogoutUser, user, services, deals, categories, mens, womens, kids, beauty, genz, authorizationToken, isLoading }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue
}