import React from 'react'
import { BiMap, BiTimeFive, BiPhoneCall } from "react-icons/bi";
import { BsInstagram, BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";
import "../../assest/css/footer.css";
import termsArray from '../ArrayFiles/termsArray';
// import logo from "../../assest/images/logomain.png"
import serviceArray from '../ArrayFiles/serviceArray';
import { Link,NavLink } from 'react-router-dom';
// import { pad1d } from '@tensorflow/tfjs';
// import { Route, Routes } from 'react-router-dom'
// import TermsPage from '../termspages/TermsPage';
const Footer = () =>
{
  return (
    <>
      <section className="footer_Wrapper">
        <div className='footer_top'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='footer_card'>
                  <div>
                    {/* <div className='card_icon'>
                      <BiMap />
                    </div> */}
                  </div>

                  <div className='f_c_text'>
                    <p> <b>Gurugram Office -</b>  </p>
                    <p className='pt-2'>
                      2nd Floor, 512, Udyog Vihar Phase V, Sector 19, Gurugram, Haryana 122008 (Night Shift)
                    </p>
                  </div>
                </div>
                {/* <div className='footer_card'>
                  <div className='card_icon'>
                    <BiTimeFive />
                  </div>
                  <div className='f_c_text'>
                    <h2 className='sub_heading_title2'>
                      Working Hours
                    </h2>
                    <p>
                      Weekdays 10AM – 7PM
                      <br />
                      Weekdays 10AM – 7PM
                    </p>
                  </div>
                </div> */}
              </div>
              <div className='col-md-4  footer_bottom '>
                <div className=' row'>
                  <div className='col-md-6'>
                    <h2 className='sub_heading_title2 '>
                      Links
                    </h2>
                    <Link to="/team">
                      Team
                    </Link>
                    <Link to="/project/1">
                      Projects
                    </Link>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                    <Link to="/aboutus">
                      About Us
                    </Link>
                    <Link to={`/${termsArray[0].link}`}>
                      Privacy Policy
                    </Link>
                    <Link to={`/${termsArray[1].link}`}>
                      Terms and Conditions
                    </Link>
                  </div>
                  <div className='col-md-6'>
                    <h2 className='sub_heading_title2'>
                      Services
                    </h2>
                   
                    <ul className='footer-ul'> 
                      {serviceArray.map((ind) => (
                        <li key={ind.id}>
                          <NavLink className=" " to={`/service/${ind.identity}`}>
                            {ind.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    {/* <Link to={`/${termsArray[2].link}`}>
                  Refund Policy
                </Link> */}
                    {/* <Link to="/about">
                  About Us
                </Link> */}
                  </div>

                </div>


              </div>
              <div className='col-md-4'>
                <div className='footer_card  border-0'> 
                  <div className='f_c_text'>
                    <h2 className='sub_heading_title2'>
                      Contact Us
                    </h2>
                    <Link to="mailto:info@ddtsoftwareandecommerce.com">
                      info@ddtsoftwareandecommerce.com
                    </Link> <br />
                    <a href="tel:+919810944806">+91 9810944806</a>
                    <div className='  footer_bottom'> 
                  <h2 className='sub_heading_title2 my-0'>
                    Social Links
                  </h2>
                  <p>
                    Empowering your digital success with tailored IT solutions.
                  </p>
                  <div className='social_link'> 
                    <a href="https://www.instagram.com">
                      <BsInstagram />
                    </a>
                    <a href="https://www.twitter.com">
                      <BsTwitter />
                    </a>
                    <a href="https://www.youtube.com">
                      <BsYoutube />
                    </a>
                    <a href="https://www.facebook.com">
                      <BsFacebook />
                    </a>
                  </div>
                </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='copyright' >
          <p>© Copyright 2024 DDT Software & E Comm Pvt Ltd . All rights reserved</p>
         </div>
        
        
      </section >
    </>
  )
}

export default Footer