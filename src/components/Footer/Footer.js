import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer ">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="footer-content container">
                                            <h2>Our Best Services you get</h2>
                                            
                                        </div>
                                    </div>

                                    <div className="col-md-6 container">
                                        <div className="footer-link">
                                            <h2>Car is passion</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="footer-newsletter container">
                                    <h2>COme Back again</h2>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </footer>
            </div>
            <div className="bg-dark"><p className="text-center p-4 text-white">All rights reserved</p></div>
        </div>
    );
};

export default Footer;