import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='px-20 text-gray-400'>
            <div className='flex justify-evenly mt-20' id='grid'>
                <div>
                    <h3 className='font-bold text-black'>Online Shopping</h3>
                    <li className='list-none mt-5'>Men</li>
                    <li className='list-none'>Women</li>
                    <li className='list-none'>Kids</li>
                    <li className='list-none'>Home</li>
                    <li className='list-none'>Beauty</li>
                    <li className='list-none'>Genz</li>
                    <li className='list-none'>Gift Cards</li>
                    <li className='list-none'>Myntra Insider</li>
                </div>
                <div>
                    <h3 className='font-bold text-black'>CUSTOMER POLICIES</h3>
                    <li className='list-none mt-5'>Contact Us</li>
                    <li className='list-none'>FAQ</li>
                    <li className='list-none'>T&C</li>
                    <li className='list-none'>Terms Of Use</li>
                    <li className='list-none'>Track Orders</li>
                    <li className='list-none'>Shipping</li>
                    <li className='list-none'>Cancellation</li>
                    <li className='list-none'>Returns</li>
                    <li className='list-none'>Privacy policy</li>
                    <li className='list-none'>Grievance Redressal</li>
                </div>
                <div className='display_none'>
                    <h3 className='font-bold mb-5 text-black'>EXPERIENCE MYNTRA APP ON MOBILE</h3>
                    <button ><img src="/images/Footer/Google Play btn.png" alt="GooglePlaybtn" className='w-36' /></button>
                    <button className='mx-3'><img src="/images/Footer/App Store btn.png" alt="AppStorebtn" className='w-34' /></button>
                </div>
                <div className='display_none'>
                    <div className='flex items-center w-[20vw] space-x-3'>
                        <img src="/images/Footer/Original.png" className='w-14' alt="" />
                        <p className=' '>
                            <span className='font-bold text-black'>100% ORIGINAL</span> guarantee for all products at myntra.com</p>
                    </div>
                    <div className='flex items-center w-[20vw] space-x-3'>
                        <img src="/images/Footer/14.png" className='w-14' alt="" />
                        <p className=' '>
                            <span className='font-bold text-black'>Return within 14 days</span> of receiving your order</p>
                    </div>
                </div>
            </div>
            <div className='px-24 space-y-3 ' id='padding' >
                <h3 className='font-bold text-black'>POPULAR SEARCHES</h3>
                <p className=' '>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees | Goggles | Bras | Suit | Chinos | Shoes |</p>
            </div>
            <div className='flex justify-evenly mt-10  '>
                <p>In case of any concern, <span className='text-blue-500 font-bold cursor-pointer'>Contact Us</span></p>
                <p>© 2025 www.myntra.com. All rights reserved.</p>
                <a href="https://www.flipkart.com/" target='_blank'><p className='cursor-pointer'>A Flipkart company</p></a>
            </div>
        </footer>
    )
}

export default Footer
