import React from 'react'
import './Footer.scss'
import { RiFacebookFill, RiLinkedinFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri'
import Features from './Features/Features'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer__main">

            <div className="logo__container">
                <img className="logo__image" src="/images/dr.jpeg" alt="" />
                <p className="logo__para" >Fastest Growing Medical Platform for Doctors</p>
                <div className="logo__social__container">
                    <div className="logo__social">
                        <RiFacebookFill />
                    </div>
                    <div className="logo__social">
                        <RiLinkedinFill />
                    </div>
                    <div className="logo__social">
                        <RiInstagramFill />
                    </div>
                    <div className="logo__social">
                        <RiYoutubeFill />
                    </div>
                </div>

            </div>

            <div className="reach__container">
                <h3>REACH US</h3>
                <p className="reach__item">Please contact below details for any other information.</p>
                <div>
                    <p className="reach__item reach__head"  >Email:</p>
                    <p className="reach__item">varun@hidoc.</p>
                </div>
                <div>
                    <p className="reach__item reach__head" >Address:</p>
                    <p className="reach__item" >hidoc dr inc 2055 limestone rd, STE 200-c  willingston, DE, 19808 united states</p>
                </div>

            </div>
            <div className="features__container">
                <Features />
            </div>
            </div>
            <div className="copyright__container">

                <p> Copyright © 2022 HIDOC Dr. inc</p>

                <p>Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}
