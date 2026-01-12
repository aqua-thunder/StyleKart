import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import './wishlist.css'


const Wishlist = () => {
  const API_URL = import.meta.env.VITE_API_URL;

    const { user, authorizationToken } = useAuth();
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch wishlist from backend
    const fetchWishlist = async () => {
        if (!user) return;
        try {
            const response = await fetch(
                `${API_URL}/api/wishlist/${user._id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );
            const data = await response.json();
            setWishlist(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (authorizationToken && user) {
            setLoading(true);
            fetchWishlist();
        }
    }, [authorizationToken, user]);


    // Remove item from wishlist
    const removeItem = async (id) => {
        try {
            const response = await fetch(
                `${API_URL}/api/wishlist/remove/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );
            const data = await response.json();
            toast.success(data.message || "Removed");
            // Remove from local state
            setWishlist(wishlist.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    if (!user) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Please login to see your wishlist</h2>
                <Link to="/login" className="text-[#ff3e6c] font-semibold">Go to Login</Link>
            </div>
        );
    }

    if (loading) {
        return <div className="p-10 text-center">Loading wishlist...</div>;
    }

    if (wishlist.length === 0) {
        return <div className="p-10 text-center text-gray-500 text-lg font-bold space-y-3">
            <div>Your wishlist is empty. Start adding items you love ❤️</div>
            <Link to={"/"} className="cursor-pointer text-[#ff3e6c]">let's go</Link>
        </div>;
    }

    return (
        <div className="p-10 cursor-pointer" id="wishlist">
            <h1 className="text-[20px] font-semibold mb-6">My Wishlist : <span className="text-gray-600">{wishlist.length}</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {wishlist.map((item) => (
                    <div key={item._id} className="relative rounded-lg shadow hover:shadow-lg  flex flex-col" id="whishlist_item">
                        {/* Product Image */}
                        <img
                            src={item.productDetails.imgUrl}
                            alt={item.productDetails.about}
                            className="w-[12vw] rounded-md mb-4 sm:w-[36vw]"
                        />

                        {/* Product Info */}
                        <div className="px-4">
                            <h2 className=" sm:text-[17px] line-clamp-1  mb-1">{item.productDetails.about}</h2>
                            <div className="flex items-center mb-2" id="price_info">
                                <span className="font-bold text-lg">₹{item.productDetails.price}</span>
                                <span className="text-gray-400 line-through ml-2">₹{item.productDetails.mrp}</span>
                                <span className="text-[#ff955a] ml-2">{item.productDetails.discount}</span>
                            </div>
                        </div>
                        <img src="/images/SVG/cross.svg" onClick={() => removeItem(item._id)} className="absolute bg-[#131212] rounded-full right-3 top-3 invert-100 w-5" id="cross_img" alt="cross img" />

                        {/* Remove Button */}
                        <button className="text-[#eb5c7d] py-2 rounded-md font-bold mt-auto cursor-pointer">MOVE TO BAG</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
