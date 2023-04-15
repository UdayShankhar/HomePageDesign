import React from 'react'

function OffersSection() {
  return (
    <>
        <div className="row">
        <div className="col-xxl-6 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <img src="./icici.png" style={{ width: "100%" }} />
        </div>
        <div className="col-xxl-6 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <img src="./AC.png" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xxl-6 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <img src="./wardrobe.png" style={{ width: "100%" }} />
        </div>
        <div className="col-xxl-6 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <img src="./mattress.png" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  )
}

export default OffersSection