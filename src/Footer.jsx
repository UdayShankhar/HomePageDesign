import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer className="row mt-3" style={{ background: '#46303C',color:'#FFF' }}>
            <div className="col-xxl-6 col-lg-6 justify-content-center align-items-center">
                <div className="d-flex" id='aboutHelpPolicy'>
                    <div>
                        <ul style={{ listStyle: "none" }}>
                            <li>About</li>
                            <li className='footersublinks'>About us</li>
                            <li className='footersublinks'>Contact us</li>
                            <li className='footersublinks'>Careers</li>
                            <li className='footersublinks'>Telekart wholesale</li>
                        </ul>
                    </div>

                    <div>
                        <ul style={{ listStyle: "none" }}>
                            <li>Help</li>
                            <li className='footersublinks'>Payment</li>
                            <li className='footersublinks'>Shipping</li>
                            <li className='footersublinks'>Cancellation & Returns</li>
                            <li className='footersublinks'>FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <ul style={{ listStyle: "none" }}>
                            <li>Policy</li>
                            <li className='footersublinks'>Return Policy</li>
                            <li className='footersublinks'>Terms of Use</li>
                            <li className='footersublinks'>Privacy</li>
                            <li className='footersublinks'>Sitemap</li>
                            <li className='footersublinks'>Customer Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xxl-6 col-lg-6 d-flex justify-content-center align-items-center">
                <div className="d-flex" id='addressDetails'>
                    <div className='officeAddress'>
                        <h6>OFFICE ADDRESS</h6>
                        <p className='footerOfficeAddress'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                    <div className='officeAddress'>
                        <h6>OFFICE ADDRESS</h6>
                        <p className='footerOfficeAddress'> 
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
            </div>
            <span className='line'></span>
            <div className="col-xxl-12 col-lg-12 text-center mt-3 mb-3">
                <h6>2022-2023 TerryKart.com</h6>
            </div>
        </footer>
    )
}

export default Footer