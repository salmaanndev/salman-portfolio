import React from 'react'
import './Footer.css'
import FooterCard from '../footerCard/FooterCard'
import { FaRegAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterLinks from '../footerLinks/FooterLinks';

const Footer = ({id}) => {
    return (
        <footer id={id} className='footer'>
            <div className='footerTop'>
                <FooterCard heading="Address" desc="Lahore, Pakistan" Icon={FaRegAddressCard} />
                <FooterCard heading="Let's talk" desc="+92 313 4808881"  Icon={FaPhoneAlt} />
                <FooterCard heading="Send me email" desc="salmaanndev@gmail.com"  Icon={MdEmail} />
            </div>
            <hr />
            <div className='footerBottom'>
                <div className='copyright'>
                    <p>© Salman Ahmad' Portfolio 2024</p>
                </div>
                <div className='footerLinks'>
                    <FooterLinks title="Terms & Conditions" />
                    <FooterLinks title="Privacy Policy" />
                    <FooterLinks title="Sitemap" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
