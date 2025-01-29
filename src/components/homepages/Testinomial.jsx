import React from 'react';
import { BiCopy } from 'react-icons/bi';
import "../../assest/css/testimonial.css";
import Carousel from '../reusable/Carousel';
// import Carousel2 from '../reusable/Carousel2';
const Testinomial = () =>
{
    return (
        <section className='testimonial_wrapper'>
            <div className='container'>
                <div className='test_h_section'>
                    <div>
                        <p className='sub_heading_title'>
                            <BiCopy />  OUR BEST REVIEW’S
                        </p>
                        <h2 className='main_heading_title'>
                            CUSTOMER’S FEEDBACK
                        </h2>
                    </div>
                    <Carousel />
                </div>
            </div>
        </section>
    )
}

export default Testinomial