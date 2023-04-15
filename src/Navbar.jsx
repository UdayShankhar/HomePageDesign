import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div class="row">
        <div className="col-xxl-3 col-lg-3 col-md-4 d-flex justify-content-center align-items-center">
          {/* <h4 className="ml-2">
            TerryKart{" "}
            <span>
              <small>.com</small>
            </span>
          </h4> */}
          <img src='../TKLogo1.png' alt='' />
        </div>
        <div className="col-xxl-6 col-lg-6 col-md-4">
          <div class="input-group mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="What are you looking for?"
            />
            <span class="input-group-text">
              <AiOutlineSearch />
            </span>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-3 col-md-4 d-flex align-items-center" id='cartBag'>
          {/* <p className="mt-3 mx-3">Account</p> */}
          <div className='d-flex flex-column mx-2'>
            <small className='d-flex justify-content-center'>Account</small>
            <small style={{ fontSize: '9px' }} >Login / Register</small>
          </div>
          <AiOutlineHeart className='mx-4' />
          <BsBag className='mx-2' />
        </div>
      </div>
    </>
  )
}

export default Navbar