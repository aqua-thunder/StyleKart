import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
import './product.css'
import './GoToTop'
import Slider from 'react-slick';
import GoToTop from './GoToTop'
import useIsMobile from './useIsMobile'

const Product = () => {

  const isMobile = useIsMobile(1024);


  const API_URL = import.meta.env.VITE_API_URL;

  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const { user, authorizationToken } = useAuth();

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   cssEase: "linear",

  //   responsive: [
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 99999, // anything above 800px
  //       settings: "unslick"
  //     }
  //   ]
  // };

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const getProductData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/data/product/${id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        },
      });
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWishlist = async () => {
    if (!user) {
      toast.alt("Please login first");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/wishlist/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify({
            userId: user._id,
            productId: id,
            productDetails: info
          }),
        }
      );

      const data = await response.json();
      toast.success(data.message || "Added to wishlist");

    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = async () => {
    if (!user) {
      toast.alt("Please Login First")
    }
    try {
      const response = await fetch(`${API_URL}/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken
        },
        body: JSON.stringify({
          userId: user._id,
          productId: id,
          productDetails: info
        })
      })
      const data = await response.json();
      toast.success(data.message || "Added to Cart");
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getProductData();
  }, []);

  // useEffect(() => {
  //   console.log("USER FROM CONTEXT:", user);
  // }, [user]);

  return (
    <div id='product'>
      {
        info ? (
          <div className='flex p-10' id='block'>
            <div className='w-[60%]' id='product_image'>
              <span className='text-sm text-gray-700 font-bold' id='display_none'> <Link to={'/'} className='font-normal'>Home /</Link>  {info.category}</span>
              <div className='grid grid-cols-2 py-5 space-y-5' id='product_imgs'>
                {info.images && info.images.length > 0 ? (
                  info.images.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt="product"
                      className="w-[27vw]"
                    />
                  ))
                ) : (
                  <p>No images found</p>
                )}
              </div>
              {/* bellow crousal display when screen size bellow 800px */}
              {isMobile ? (
                <div id='crousal' className='lg:hidden'>
                  <Slider {...sliderSettings}>
                    {info.images.map((url, index) => (
                      <div key={index}>
                        <img
                          src={url}
                          alt="product"
                          className='max-w-[100%]'
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              )
                : (
                  <div>
                  </div>
                )
              }

            </div>
            <div className='w-[40%]' id='product_info'>
              <div className='py-10 space-y-2'>
                <div className='font-bold text-xl'>{info.category}</div>
                <div className='font-semi text-xl text-gray-500'>{info.about}</div>
                <div className='font-bold border text-sm border-gray-300 flex items-center space-x-2 w-40 px-2 py-1 cursor-pointer rounded-md hover:border-black'>4.4 <img src="/Images/SVG/star.svg" className='w-5' alt="" /> <span className='font-normal text-gray-500'>| 109 Ratings</span></div>
                <div className="line w-[100%] bg-gray-300 h-[1px]"></div>
                <div className='text-lg font-bold space-x-3' id='priceInfo'>
                  <span className=' text-2xl'>₹{info.price}</span>
                  <span className=' text-gray-500 line-through font-normal'>MRP ₹{info.mrp}</span>
                  <span className='text-[#ff955a]'>( {info.discount} )</span>
                </div>
                <div className='text-[#03a790] font-medium'>inclusive of all taxes</div>
                <div className='font-bold'>SELECT SIZE</div>
                <div className='flex items-center gap-3' id='product_size'>
                  <button className='font-bold border border-gray-400 rounded-full py-2 px-6 cursor-pointer hover:border-[#ff3e6c]'>38</button>
                  <button className='font-bold border border-gray-400 rounded-full py-2 px-6 cursor-pointer hover:border-[#ff3e6c]'>40</button>
                  <button className='font-bold border border-gray-400 rounded-full py-2 px-6 cursor-pointer hover:border-[#ff3e6c]'>42</button>
                  <button className='font-bold border border-gray-400 rounded-full py-2 px-6 cursor-pointer hover:border-[#ff3e6c]'>44</button>
                </div>
                <div className='space-x-5 flex items-center mt-10' id='buttons'>
                  <button className='bg-[#ff3e6c] hover:bg-[#eb5c7d] text-white font-bold w-[50%] py-4 rounded-md cursor-pointer flex items-center justify-center gap-3' id='add_btn' onClick={handleCart}>
                    <img src="/images/SVG/cart.svg" className='invert w-7' alt="" />
                    <span>ADD TO BAG</span>
                  </button>
                  <button id='wishlist_btn' onClick={handleWishlist} className='border border-gray-300 font-bold w-[40%] py-4 rounded-md cursor-pointer hover:border-gray-800' >WISHLIST</button>

                </div>
                <div className="line w-[100%] bg-gray-300 h-[1px]"></div>
                <div className='font-bold'>DELIVERY OPTION</div>
                <input type="number" name="pinCode" id="pincode" className='border border-gray-300 rounded-md pl-3 pr-24 py-3' placeholder='Enter a PIN code' />
                <div className='text-xs'>Please enter PIN code to check delivery time & Pay on Delivery Availability</div>
                <ul className='space-y-2 text-gray-600 mt-5'>
                  <li>100% Original Products</li>
                  <li>Pay on delivery might be available</li>
                  <li>Easy 7 days returns and exchanges</li>
                </ul>
                <div className='space-y-2' id='BestOffers'>
                  <h3 className='font-bold'>BEST OFFERS</h3>
                  <div className='space-y-2'>
                    <div className='font-bold'>Best Price: <span className='text-[#ff955a]'>Rs. 455</span></div>
                    <ul className='list-disc px-5 '>
                      <li>Applicable on: Orders above Rs. 300 (only on first purchase)</li>
                      <li>Coupon code: EORS30</li>
                      <li>Coupon Discount: 30% off (Your total saving: Rs. 2344)text-[#ff955a]</li>
                    </ul>
                  </div>
                  <div className='text-[#ff3e6c] font-bold text-sm cursor-pointer'>Terms & Condition</div>
                  <div className='space-y-2'>
                    <div className='font-bold'>10% Instant Discount on ICICI Bank Credit Card</div>
                    <ul className='list-disc px-5 text-sm'>
                      <li>Min Spend ₹3,500, Max Discount ₹750</li>
                    </ul>
                  </div>
                  <div className='text-[#ff3e6c] font-bold text-sm cursor-pointer'>Terms & Condition</div>
                  <div className='space-y-2'>
                    <div className='font-bold'>10% Instant Discount on ICICI Bank Credit Card EMI</div>
                    <ul className='list-disc px-5 text-sm'>
                      <li>Min Spend ₹3,500, Max Discount ₹1,000</li>
                    </ul>
                  </div>
                  <div className='text-[#ff3e6c] font-bold text-sm cursor-pointer'>Terms & Condition</div>
                  <div className='space-y-2'>
                    <div className='font-bold'>10% Instant Discount on RBL Bank Credit Card</div>
                    <ul className='list-disc px-5 text-sm'>
                      <li>Min Spend ₹3,500, Max Discount ₹750</li>
                    </ul>
                  </div>
                  <div className='text-[#ff3e6c] font-bold text-sm cursor-pointer'>Terms & Condition</div>
                  <div className='space-y-2'>
                    <div className='font-bold'>10% Instant Discount on RBL Bank Credit Card EMI</div>
                    <ul className='list-disc px-5 text-sm'>
                      <li>Min Spend ₹3,500, Max Discount ₹1,000</li>
                    </ul>
                  </div>
                  <div className='text-[#ff3e6c] font-bold text-sm cursor-pointer'>Terms & Condition</div>
                </div>
                <div className="line w-[100%] bg-gray-300 h-[1px]"></div>
                <div id='product_detail' className='space-y-3'>
                  <div className='font-bold'>PRODUCT DETAILS</div>
                  <ul>
                    {Object.entries(info.productDetails).map(([key, value]) => (
                      <li key={key}>
                        <span className='font-semibold'>{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                  <div className='font-bold'>Size & Fit</div>
                  <ul>
                    {info?.sizeAndFit ? (
                      Object.entries(info.sizeAndFit).map(([key, value]) => (
                        <li key={key}>
                          <span className="font-semibold">{key}:</span> {value}
                        </li>
                      ))
                    ) : (
                      <p></p>
                    )}

                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) :
          (
            <div className="flex items-center justify-center gap-2 h-screen">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></span>
            </div>
          )
      }
      <GoToTop />
    </div >
  );
};

export default Product;
