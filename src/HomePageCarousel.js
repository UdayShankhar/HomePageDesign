import React from 'react'
import { Carousel } from "react-responsive-carousel";

function HomePageCarousel() {
    return (
        <div className='row'>
            <Carousel autoPlay showThumbs={false} showStatus={false}>
                <div>
                    <img src="./homepage.png" />
                </div>
                <div>
                    <img src="./homepage.png" />
                </div>
                <div>
                    <img src="./homepage.png" />
                </div>
            </Carousel>
        </div>
    )
}

export default HomePageCarousel