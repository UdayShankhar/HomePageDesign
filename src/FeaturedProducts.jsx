import React from 'react'
import './index.css'

  const ItemsArray1 = [
    {
      itemPic:
        "https://rukminim1.flixcart.com/image/312/312/kzfvzww0/television/g/4/k/43fd2a00-43-y1s-oneplus-original-imagbgc44gerfphz.jpeg?q=70",
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
function FeaturedProducts() {
  return (
    <div className='row' id='containerDiv'>
        {ItemsArray1.map((data, index) => (
          <div
            className="col-xxl-2 col-lg-2 col-md-2 col-sm-6 d-flex flex-column justify-content-center align-items-center"
            id="featuredProducts"
          >
            <img className="ItemsArrayImg" src={data.itemPic} alt="" />
            <p className="mt-2 featuredProuctsTitle"> {data.itemTitle} </p>
            <p className='featuredProuctsPrice'> {data.itemPrice} </p>
          </div>
        ))}
    </div>
  )
}

export default FeaturedProducts