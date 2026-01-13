import React from 'react';
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import './home.css'
import { useAuth } from '../store/auth';
import GoToTop from './GoToTop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useDeviceType from './UseDeviceType';


const Home = (props) => {

   if (props.home) {
        const element = document.getElementById('home')
        console.log(element)
        element.style.filter = props.filter
    }


  const getSliderSettings = (slides) => ({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: slides,
    slidesToScroll: slides,
  });

  const device = useDeviceType();

  const slidesCount =
    device === "mobile" ? 2 :
      device === "tablet" ? 3 : 5;

  const sliderSettings = getSliderSettings(slidesCount);


  const { services } = useAuth();
  const { deals } = useAuth();
  const { categories } = useAuth();


  // const settings = {
  //   mobileFirst: true,
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear",

  //   responsive: [
  //     {
  //       breakpoint: 920, // 300–920px
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 1200, // above 920px (tablet / small laptop)
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //       },
  //     },
  //   ],
  // };



  const crousal = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="mt-10 overflow-x-hidden overflow-hidden" id='home'>
      <div className="slider-container">
        <Slider {...crousal}>
          <div className='cursor-pointer'>
            <img src="/images/Crousal/img1.webp" alt="" />
          </div>
          <div className='cursor-pointer'>
            <img src="/images/Crousal/img2.webp" alt="" />
          </div>
          <div className='cursor-pointer'>
            <img src="/images/Crousal/img3.webp" alt="" />
          </div>
          <div className='cursor-pointer'>
            <img src="/images/Crousal/img4.webp" alt="" />
          </div>

        </Slider>
      </div>

      <div id='RISING-STARS'>
        <h2 className="text-3xl text-[#3e4152] font-bold px-10 py-[6vw] tracking-[6px]">RISING STARS</h2>
        {Array.isArray(services) && services.length > 0 ? (
          <div className="slider-container">
            <Slider  {...sliderSettings}>
              {services.map((service, index) => (
                <div key={index}>
                  <div className="bg-white text-center">
                    {service.imageUrl ? (
                      <img
                        src={service.imageUrl}
                        alt={service.category}
                        className='cursor-pointer'
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 rounded-md mb-3"></div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></span>
          </div>
        )}
      </div>

      <div id='LUXE-GRAND-REDUCTION-DEALS'>
        <h2 className="text-3xl text-[#3e4152] font-bold px-10 py-[6vw] tracking-[6px]">LUXE GRAND REDUCTION DEALS</h2>
        {Array.isArray(deals) && deals.length > 0 ? (
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {deals.map((deal, index) => (
                <div key={index}>
                  <div className="bg-white text-center">
                    {deal.imageUrl ? (
                      <img
                        src={deal.imageUrl}
                        alt={deal.category}
                        className='cursor-pointer w-[24vw] h-[22vw]'
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 rounded-md mb-3"></div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 ">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></span>
          </div>
        )}
      </div>

      <div id='SHOP-BY-CATEGORY'>
        <h2 className="text-3xl text-[#3e4152] font-bold px-10 py-[6vw] tracking-[6px]">SHOP-BY-CATEGORY</h2>
        {
          Array.isArray(categories) && categories.length > 0 ? (
            <div className='grid grid-cols-6  px-20 padding' id='grid'>
              {
                categories.map((item, index) => {
                  return (
                    <div className='cursor-pointer px-5 py-5 padding' key={index}>
                      <img src={item.imageUrl} alt="" className='max-h-[50vh]' />
                    </div>
                  )
                })
              }
            </div>
          ) : (
            <div>No Category Available</div>
          )
        }
      </div>
      <GoToTop />
    </div>
  );
};

export default Home;
