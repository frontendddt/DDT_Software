import React from 'react';
import Layout from '../reusable/Layout';
import Breadcrumb from '../reusable/Breadcrumb';
import { useParams } from 'react-router-dom';
import TeamDetailsArray from '../ArrayFiles/teamDetailsArray';
import { BiUser, BiRightArrowAlt } from "react-icons/bi";
// import { FaLinkedinIn } from "react-icons/fa";
import ContactForm from '../reusable/ContactForm';
const TeamCard = () =>
{
    const userId = useParams();
    return (
        <>
            <Layout>
                <Breadcrumb pageHeader="Team Details" />
                <section className='team_mem_detail_wrap'>
                    <div className='container'>

                        {
                            TeamDetailsArray.filter(item => item.id === parseInt(userId.id)).map((index, id) =>
                            {
                                return (
                                    <>
                                        <div className='row' key={id}>
                                            <div className='col-lg-5'>
                                                <div className='team_mem_img'>
                                                    <img src={index.image} alt={index.image} />
                                                </div>
                                            </div>
                                            <div className='col-lg-7'>
                                                <div className='team_mem_dt_card'>
                                                    <div className='head'>
                                                        <h3 className='service_title'>
                                                            {index.name}
                                                        </h3>
                                                        <p className='detail_text2'>
                                                            {index.degination}
                                                        </p>
                                                        <span className='paragraph'>
                                                            {index.detailExp}
                                                        </span>
                                                    </div>
                                                    <div className='card_body'>
                                                        <ul>
                                                            <li>
                                                                <span>
                                                                    <BiUser />
                                                                </span>
                                                                <div className='list_item'>
                                                                    <p className='paragraph'>
                                                                        Experience
                                                                    </p>
                                                                    <p className='detail_text'>
                                                                        {index.experience}
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            {/* <li>
                                                                <span>
                                                                    <BiEnvelope />
                                                                </span>
                                                                <div className='list_item'>
                                                                    <p className='paragraph'>
                                                                        Email
                                                                    </p>
                                                                    <p className='detail_text'>
                                                                        {index.email}
                                                                    </p>
                                                                </div>
                                                            </li> */}
                                                        </ul>
                                                        {/* <ul>
                                                            <li>
                                                                <span>
                                                                    <BiPhone />
                                                                </span>
                                                                <div className='list_item'>
                                                                    <p className='paragraph'>
                                                                        Phone
                                                                    </p>
                                                                    <p className='detail_text'>
                                                                        {index.phone}
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    <FaLinkedinIn />
                                                                </span>
                                                                <div className='list_item'>
                                                                    <p className='paragraph'>
                                                                        Linkdin
                                                                    </p>
                                                                    <p className='detail_text'>
                                                                        {index.linkdien}
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul> */}
                                                    </div>
                                                    <a className="blue_btn" href="/contact">
                                                        Get In Touch <BiRightArrowAlt />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </section>
                <div className='contact_frm_wrapper'>
                    <ContactForm title={"Send Us Email"} paragraph="" heading={"Feel Free To Write"} />
                </div>
            </Layout>
        </>
    )
}

export default TeamCard