import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='line bg-gray-300 w-full h-[1px]'></div>
            <footer className='px-20 text-gray-400'>
                <div className='flex justify-evenly mt-20 ' id='grid'>
                    <div id='center'>
                        <h3 className='font-bold text-black'>ONLINE SHOPPING</h3>
                        <NavLink to="/men"><li className='list-none mt-5 hover:text-black hover:font-semibold'>Men</li></NavLink>
                        <NavLink to="/women"><li className='list-none hover:text-black hover:font-semibold'>Women</li></NavLink>
                        <NavLink to="/kids"><li className='list-none hover:text-black hover:font-semibold'>Kids</li></NavLink>
                        <NavLink to="/"><li className='list-none hover:text-black hover:font-semibold'>Home</li></NavLink>
                        <NavLink to="/beauty"><li className='list-none hover:text-black hover:font-semibold'>Beauty</li></NavLink>
                        <NavLink to="/genz"><li className='list-none hover:text-black hover:font-semibold'>Genz</li></NavLink>
                        <NavLink to="/gift-cards"><li className='list-none hover:text-black hover:font-semibold'>Gift Cards</li></NavLink>
                        <NavLink to="/insiders"><li className='list-none hover:text-black hover:font-semibold'>Stylekaart Insider</li></NavLink>
                    </div>
                    <div id='center'>
                        <h3 className='font-bold text-black'>CUSTOMER POLICIES</h3>
                        <li className='list-none mt-5 hover:text-black hover:font-semibold'>Contact Us</li>
                        <li className='list-none hover:text-black hover:font-semibold'>FAQ</li>
                        <li className='list-none hover:text-black hover:font-semibold'>Terms Of Use</li>
                        <li className='list-none hover:text-black hover:font-semibold'>Track Orders</li>
                        <li className='list-none hover:text-black hover:font-semibold'>Shipping</li>
                        <li className='list-none hover:text-black hover:font-semibold'>Cancellation</li>
                        <li className='list-none hover:text-black hover:font-semibold'>Returns</li>
                        <li className='list-none hover:text-black hover:font-semibold'>Privacy policy</li>
                    </div>
                    <div className='display_none'>
                        <h3 className='font-bold mb-5 text-black'>EXPERIENCE STYLEKAART APP ON MOBILE</h3>
                        <button ><img src="/images/Footer/Google Play btn.png" alt="GooglePlaybtn" className='w-36' /></button>
                        <button className='mx-3'><img src="/images/Footer/App Store btn.png" alt="AppStorebtn" className='w-34' /></button>
                    </div>
                    <div className='display_none'>
                        <div className='flex items-center w-[20vw] space-x-3'>
                            <img src="/images/Footer/Original.png" className='w-14' alt="" />
                            <p className=' '>
                                <span className='font-bold text-black'>100% ORIGINAL</span> guarantee for all products at stylekaart.com</p>
                        </div>
                        <div className='flex items-center w-[20vw] space-x-3'>
                            <img src="/images/Footer/14.png" className='w-14' alt="" />
                            <p className=' '>
                                <span className='font-bold text-black'>Return within 14 days</span> of receiving your order</p>
                        </div>
                    </div>
                </div>
                <div className='px-24 space-y-3 mt-10' id='padding' >
                    <h3 className='font-bold text-black'>POPULAR SEARCHES</h3>
                    <p className=' '>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | stylekaart Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees | Goggles | Bras | Suit | Chinos | Shoes |</p>
                </div>
                <div className='flex justify-evenly mt-10 space-y-2' id='all-rights'>
                    <p>In case of any concern, <span className='text-blue-500 font-bold cursor-pointer'>Contact Us</span></p>
                    <p>© 2025 www.stylekaart.com. All rights reserved.</p>
                    <a href="https://www.flipkart.com/" target='_blank'><p className='cursor-pointer'>A Flipkart company</p></a>
                </div>
            </footer>
        </>
    )
}

export default Footer
