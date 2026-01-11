import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import './wishlist.css'


const Cart = () => {
    const API_URL = import.meta.env.VITE_API_URL;

    const { user, authorizationToken } = useAuth();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Cart from backend
    const fetchCart = async () => {
        if (!user) return;
        try {
            const response = await fetch(
                `${API_URL}/api/cart/${user._id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );
            const data = await response.json();
            setCart(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (authorizationToken && user) {
            setLoading(true);
            fetchCart();
        }
    }, [authorizationToken, user]);

    // Remove item from cart
    const removeItem = async (id) => {
        try {
            const response = await fetch(
                `${API_URL}/api/cart/remove/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );
            const data = await response.json();
            toast.success(data.message || "Removed from the cart");
            // Remove from local state
            setCart(cart.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    if (!user) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Please login to see your cart</h2>
                <Link to="/login" className="text-[#ff3e6c] font-semibold">Go to Login</Link>
            </div>
        );
    }

    if (loading) {
        return <div className="p-10 text-center">Loading cart...</div>;
    }

    if (cart.length === 0) {
        return <div className="p-10 text-center text-gray-500 text-lg font-bold space-y-3">
            <div>Your cart is empty. Start adding items you love ❤️</div>
            <Link to={"/"} className="cursor-pointer text-[#ff3e6c]">let's go</Link>
        </div>;
    }

    return (
        <div className="p-10 cursor-pointer" id="wishlist">
            <h1 className="text-[20px] font-semibold mb-6">My Cart : <span className="text-gray-600">{cart.length}</span></h1>

            {Array.isArray(cart) && cart.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {cart.map((item) => (
                        <div key={item._id} className=" rounded-lg shadow hover:shadow-lg  flex flex-col" id="whishlist_item">
                            {/* Product Image */}
                            <img
                                src={item.productDetails.imgUrl}
                                alt={item.productDetails.about}
                                className="w-[12vw] rounded-md mb-4 sm:w-[36vw]"
                            />

                            {/* Product Info */}
                            <div className="px-4">
                                <h2 className="font-bold sm:text-sm  mb-1">{item.productDetails.category}</h2>
                                <div className="flex items-center mb-2" id="price_info">
                                    <span className="font-bold text-lg">₹{item.productDetails.price}</span>
                                    <span className="text-gray-400 line-through ml-2">₹{item.productDetails.mrp}</span>
                                    <span className="text-[#ff955a] ml-2">{item.productDetails.discount}</span>
                                </div>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => removeItem(item._id)}
                                className="bg-[#ff3e6c] hover:bg-[#eb5c7d] text-white py-2 rounded-md font-semibold mt-auto cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No result found</div>
            )
            }
        </div>

    );
};

export default Cart;
