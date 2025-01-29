import React from 'react'
import Layout from '../reusable/Layout'
import "../../assest/css/Servicecss/serviceDetails.css";
// import service1 from "../../assest/images/servicedet1.jpg";
// import service12 from "../../assest/images/servicedet2.jpg";
// import service13 from "../../assest/images/servicedet4.jpg";
import {  BiAlarm, BiRightArrowAlt } from "react-icons/bi";
// import { Accordion } from 'react-bootstrap';
// import serviceArray from '../ArrayFiles/serviceArray';
// import innerServices from '../ArrayFiles/innerServices';
import Breadcrumb from '../reusable/Breadcrumb';
import { Link,  useParams } from 'react-router-dom';
import SubMenuContent from './SubMenuContent';
// import { useParams } from 'react-router-dom'

const InnerServices = () =>
{
    const bgstyle = {
        backgroundColor: "#e7ebf3",
        padding: "20px",
        marginTop: "35px"
    }
    // const [innerId, setInnerId] = useState(0);
    // const handleInnerService = (id) =>
    // {
    //     setInnerId(id)
    // }
    const { id } = useParams();
    const { innerservice } = useParams();
   
    // console.log(id)
    return (
        <Layout>
            <Breadcrumb pageHeader="Service Detail" />
            <section className='service_detai_page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <ul className='lt_list_cntnt'>
                                <h2 className='service_title'>Benefits</h2> 
                                <li class="detail_text">Innovation</li>
                                <li class="detail_text">Efficiency</li>
                                <li class="detail_text">Global Reach</li>
                                <li class="detail_text">Adaptability</li>
                                <li class="detail_text">Competitive Edge</li> 
                            </ul>
                             
                             
                            <ul className='lt_list_cntnt time_cnt'>
                                <h2 className='service_title'>Working Hours</h2>
                                <li>
                                    <BiAlarm /> <p className='detail_text'>Weekdays 10AM – 7PM</p>
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


                        <SubMenuContent   />
                        
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default InnerServices