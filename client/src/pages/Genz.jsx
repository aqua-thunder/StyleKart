import React from 'react'
import { useAuth } from '../store/auth';
import './categories.css'
import { Link } from 'react-router-dom';
import GoToTop from './GoToTop';

const Genz = () => {
  const { genz } = useAuth();

  return (
    <div>
      <div  id='CATEGORY'>
        <h2 className="text-2xl text-[#3e4152] font-bold px-24 py-[3vw] tracking-[3px]">Genz’s Wear Collection</h2>
        {
          Array.isArray(genz) && genz.length > 0 ? (
            <div className='grid grid-cols-6 px-20 padding' >
              {
                genz.map((item, index) => {
                  return (
                   <Link to={`/product/${item._id}`} className='relative group cursor-pointer px-5 py-5 padding text-sm space-y-2 hover:shadow-gray-300 hover:shadow' id='product' key={index}>
                      <img src={item.imgUrl} alt="" className='w-[25vw]' id='product_img' />
                      <div id='wishlist' className='absolute invisible group-hover:visible group-hover:transition group-hover:delay-30 group-hover:duration-150 group-hover:ease-in-out group-hover:translate-y-[-39px] group-hover:translate-x-[0px] group-hover:scale-110  border border-gray-400 w-48 py-2 bg-white font-bold text-center text-[12px] flex items-center justify-center gap-1'><img src="../../../images/SVG/heart.svg" className='w-5' alt="" /> <span>WISHLIST</span></div>

                      <div className='font-bold' id='item_category'>{item.category}</div>
                      <div className='line-clamp-1' id='item_about'>{item.about}</div>
                      <div className='flex items-center gap-2'>
                        <span className='font-bold' id='item_price'>Rs. {item.price}</span>
                        <span className='line-through' id='item_mrp'>Rs. {item.mrp}</span>
                        <span className='text-green-600' id='item_discount'>{item.discount}</span>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
          ) : (
            <div>No Category Available</div>
          )
        }
      </div>
      <GoToTop/>
    </div>
  )
}

export default Genz
