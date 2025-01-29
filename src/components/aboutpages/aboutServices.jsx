import React from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import ErrorPage from '../../ErrorPage';
import Layout from '../reusable/Layout';
import Breadcrumb from '../reusable/Breadcrumb';
import {  BiAlarm, BiRightArrowAlt } from "react-icons/bi";
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



const aboutServiceArray = [
    {
        id: 1,
        name: "first service",
        address: "chshi"
    },
    {
        id: 2,
        name: "second service",
        address: "chshi"
    },
    {
        id: 3,
        name: "third service",
        address:"chshi"
    },
    {
        id: 4,
        name: "fourth service",
        address:"chshi"
    }
];




const AboutService = () =>
{

    const { id } = useParams();

    const selectedService = aboutServiceArray.find(item => item.id === parseInt(id));

    return (
        <>
            <Layout>
                <Breadcrumb pageHeader="About Service Detail" />
                <div className='service_detai_page watermark'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-lg-4'>
                                <ul className='lt_list_cntnt'>
                                    <h2 className='service_title'>All About Services</h2>
                                    <li>
                                        <NavLink className='detail_text' to="/service/detail/1">Cloud Solutions</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='detail_text' to="/service/detail/2">Software Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='detail_text' to="/service/detail/3">Machine Learning</NavLink>
                                    </li>
                                </ul>
                                <ul className='lt_list_cntnt time_cnt'>
                                    <h2 className='service_title'>Working Hours</h2>
                                    <li>
                                        <BiAlarm /> <p className='detail_text'>Mon – Fri 1.00 – 2:00 pm</p>
                                    </li>
                                    <li>
                                        <BiAlarm /> <p className='detail_text'>Saturday 8.00 – 12:00 pm</p>
                                    </li>
                                    <li>
                                        <BiAlarm /> <span className='detail_text'>Sunday closed</span>
                                    </li>
                                </ul>
                                <div className='qry_cnt'>
                                    <div>
                                        <h2 className='main_heading_title'>Have Any Query?</h2>
                                        <Link className='blue_btn' to="/contact">
                                            Get quote <BiRightArrowAlt />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-8'>
                                {

                                    (selectedService) ?
                                        <> <h1>About Service Detail</h1>
                                            {
                                                <div>
                                                    <h5>{selectedService.name}</h5>
                                                    <h5>{selectedService.address}</h5>
                                                </div>
                                            }</> : <ErrorPage />
                                }
                            </div>
                        </div>
                    </div>
                </div>
               
            </Layout>
           
        </>
    );
};

export default AboutService;
