import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.css";
import Products from './Products.json';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { Navigation } from "swiper";

  const topOffers = [
    {
      itemPic: "https://rukminim1.flixcart.com/image/312/312/l51d30w0/television/1/k/j/-original-imagfsyu8nrz5gzg.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/l51d30w0/television/1/k/j/-original-imagfsyu8nrz5gzg.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/television/g/d/y/50x3-infinix-original-imaggfzdbstsqsgy.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/l51d30w0/television/1/k/j/-original-imagfsyu8nrz5gzg.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/l3bx5e80/television/0/w/q/-original-imageh37h34rehqf.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/l3bx5e80/television/0/w/q/-original-imageh37h34rehqf.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic: "https://rukminim1.flixcart.com/image/312/312/l51d30w0/television/1/k/j/-original-imagfsyu8nrz5gzg.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/l51d30w0/television/1/k/j/-original-imagfsyu8nrz5gzg.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/television/g/d/y/50x3-infinix-original-imaggfzdbstsqsgy.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/l51d30w0/television/1/k/j/-original-imagfsyu8nrz5gzg.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/l3bx5e80/television/0/w/q/-original-imageh37h34rehqf.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/l3bx5e80/television/0/w/q/-original-imageh37h34rehqf.jpeg?q=70",
      itemPrice: "From 499",
      itemTitle: "Televsions",
    },
  ];

function BrandOffers() {
    const [topOffersProducts,setTopOffersProducts]=useState([])
  useEffect(()=>{
Products.map((e)=>{
  setTopOffersProducts(e.data)
})
  },[])
  return (
<Swiper
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1028:{
      slidesPerView:6
    }
  }}
  navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        modules={[Navigation]}
    >
    <div className="row mt-4">
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
        <AiFillRightCircle className="svgIcon"  />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <AiFillLeftCircle className="svgIcon"  />
      </div>
    </Swiper>
  )
}

export default BrandOffers