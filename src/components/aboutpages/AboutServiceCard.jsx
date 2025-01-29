import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assest/css/aboutcss/serviceCard.css";
// import cloud from "../../assest/images/serviceCloud.svg";
// import software from "../../assest/images/servicesoftware.svg";
// import machine from "../../assest/images/servicemachine.svg";
import serviceArray from '../ArrayFiles/serviceArray';
import NewCarousel from '../reusable/NewCarousel';


// const serviceArray = [
//     {
//         id: 1,
//         icon: cloud,
//         title: "Cloud Services",
//         detail: " We offer comprehensive cloud solutions to help businesses harness......",
//         link: "/service/detail",
//         num: "01"
//     },
//     {
//         id: 2,
//         icon: software,
//         title: "Software Services",
//         detail: " We offer comprehensive software solutions to meet your business needs......",
//         link: "/service/detail",
//         num: "02"
//     },
//     {
//         id: 3,
//         icon: machine,
//         title: "Machine Learning",
//         detail: "We offer cutting- edge solutions leveraging the power of machine learning.....",
//         link: "/service/detail",
//         num: "03"
//     },
// ]
const ServiceCard = () =>
{
    return (
        <section className='service_card_wrapper'>
            <div className='container'>
                <NewCarousel show={3}>
                    {serviceArray.map((service, index) => (
                        <div className='content_carousel row gy-3' key={index}>
                            <div className='service_card_b_e'>
                                <div className='service_card'>
                                    <div className="service-top">
                                        <span className='head_img'>
                                            <img src={service.icon} alt={service.icon} />
                                        </span>
                                    </div>
                                    <h3 className='service_title'>
                                        {service.title}
                                    </h3>
                                    <p className='detail_text'>
                                        {service.detail}
                                    </p>
                                    <Link className='smoke_btn' to={`/servicedetails/${service.id}`}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </NewCarousel>
            </div>
        </section>
    );
};

export default ServiceCard;