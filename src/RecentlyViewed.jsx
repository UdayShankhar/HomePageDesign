import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.css";
import Products from './Products.json';
import { Navigation } from "swiper";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
function RecentlyViewed() {
  const [topOffersProducts, setTopOffersProducts] = useState([])
  useEffect(() => {
    Products.map((e) => {
      setTopOffersProducts(e.data)
    })
  }, [])
  return (
    <Swiper
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1028: {
          slidesPerView: 6
        }
      }}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      }}
      modules={[Navigation]}
    >
      <div className="row">
        {topOffersProducts.map((data, index) => (
          <div
            className="col-xxl-2 col-lg-2 col-md-4 col-sm-6 bg-light-subtle d-flex flex-column justify-content-center align-items-center"
            style={{ height: "300px" }}
          >
            <SwiperSlide>
              <img
                className="ItemsArray1Img"
                src={data.imageContent}
                alt="TOP OFFERS"
              />
              <p className="mt-2 productName">{data.productName}</p>
            </SwiperSlide>
          </div>
        ))}
      </div>
      <div className="swiper-button image-swiper-button-next">
        <AiFillRightCircle className="svgIcon" />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <AiFillLeftCircle className="svgIcon" />
      </div>
    </Swiper>
  )
}

export default RecentlyViewed