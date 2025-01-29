import React from 'react';
import { Link } from 'react-router-dom';
import "../../assest/css/service.css";
import serviceArray from '../ArrayFiles/serviceArray';
const ServiceCard = () =>
{
    return (
        <section className="service_wrapper">

            <p className='sub_heading_title text-center'>
                Our latest services
            </p>
            <h2 className='main_heading_title text-center'>
                WHAT KIND OF SERVICES <br /> WE ARE OFFERING
            </h2>
            <div className='container pt-3'>
                <div className='row'>
                    {
                        serviceArray.map((index, id) =>
                        {
                            return (
                                <>
                                    <div className='col-lg-4 col-md-6' key={id}>
                                        <div className='service_card'>
                                            <span className='head_img'>
                                                <img src={index.icon} alt={index.icon} />
                                            </span>
                                            <h3 className='service_title'>
                                                {index.title}
                                            </h3>
                                            <p className='detail_text'>
                                                {index.detail}
                                            </p>
                                            <Link className='smoke_btn' to={`/service/${index.identity}`}>Read More </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div> 
        </section>
    )
}

export default ServiceCard