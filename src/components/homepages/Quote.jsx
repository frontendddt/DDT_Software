import React from 'react';
import {  BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Quote = () =>
{
    return (
        <section className='quote_wrapper'>
            <div className='container q_text'>
                <div>
                    <p className='sub_heading_title2'>
                       WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7
                    </p>
                    <h2 className='main_heading_title2'>
                        NEED A CONSULTATION?
                    </h2>
                </div>
                <Link className='blue_btn' to="/contact">
                    Get quote <BiRightArrowAlt />
                </Link>
            </div>
        </section>
    )
}

export default Quote