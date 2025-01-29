import React, { useState } from 'react';
import "../../assest/css/Servicecss/serviceDetails.css";
import { BiCheckCircle, BiRightArrowAlt } from "react-icons/bi";
import { Link, NavLink, useLocation } from 'react-router-dom';
import projectArray from '../ArrayFiles/projectArray';
import { FaStar } from "react-icons/fa";

// import { div } from '@tensorflow/tfjs';

const ProjectDetails = ({ projectId }) =>  
{
    const location = useLocation();
    const isDevOpsActive = location.pathname === '/project/5';

    const filteredArray = projectArray.filter(item => item.id === parseInt(projectId));
   
    return (
        <>
            <section className='service_detai_page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='service_title mb-3' style={{ textAlign: 'center' }}>All Projects</h2>
                            <ul className='lt_list_cntnt-new'>

                                <li>
                                    <NavLink className="detail_text" to="/project/1">Fullstack Development</NavLink>
                                </li>
                                <li>
                                    <NavLink className="detail_text" to="/project/2">WordPress/HTML5 Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink className="detail_text" to="/project/3"> PHP Laravel Projects </NavLink>
                                </li>
                                <li>
                                    <NavLink className="detail_text" to="/project/4">Digital Marketing Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink className="detail_text" activeClassName="active" to="/project/5">DevOps Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink className="detail_text" to="/project/6">Dot Net Projects</NavLink>
                                </li>
                            </ul>

                            {
                                filteredArray.map((index) =>
                                {
                                    return (
                                        <div key={index.id}>
                                            <div className='it_slt_bsns_t_sec'>
                                                <div className='row'> 
                                                    
                                                    {index.indeProjects.map((item) => (
                                                        <div className='col-md-4'>
                                                            <div key={item.id}  ><a href={`https://${item.link}`} target='_blank' style={{ textDecoration: "none" }}>
                                                                <img src={item.imageUrl} alt={`Project ${item.id}`} />
                                                                <h6 style={{ textAlign: "center", color: "black" }}>{item.prodet}</h6>
                                                            </a></div>
                                                        </div> 
                                                    ))}
                                                </div>

                                                {/* <h2 className='service_title'>{index.title}</h2> */}
                                                {/* <p>
                                                    {index.hdpara}
                                                </p> */}
                                               
                                            </div>
                                            {/* <div className='it_slt_bsns_md_sec p-3 bg-white'>
                                                <img src={index.icon} alt="projectSample" />
                                                <ul>
                                                    <h3 className='sub_heading_title'>{index.incldet} :</h3>
                                                    {
                                                        index?.incldescription?.map((e, id) =>
                                                        {
                                                            return (
                                                                <>
                                                                    <li key={id}>
                                                                        <p className='detail_text'>
                                                                            <BiCheckCircle /> {e.detail}
                                                                        </p>
                                                                    </li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    <Link to={`https://${index.link}`} className='blue_btn' target='_blank' rel='noopener noreferrer'>View Project</Link>
                                                </ul>
                                            </div> */}
                                            
                                        </div>
                                    )
                                })
                            }

                            {/* <ul className='lt_list_cntnt time_cnt'>
                                <h2 className='service_title'>Achievements</h2>
                                <li>
                                    <p className='detail_text'>Most Service Provider</p>
                                </li>
                                <li>
                                    <p className='detail_text'>Complete 430+ Projects</p>
                                </li>
                                <li>
                                    <p className='detail_text'>Make 2000+ Clients Happy</p>
                                </li>
                            </ul> */}
                            {/* <div className='qry_cnt'>
                                <div>
                                    <h2 className='main_heading_title'>Have Any Query?</h2>
                                    <Link className='blue_btn' to="/contact">
                                        Get quote <BiRightArrowAlt />
                                    </Link>
                                </div>
                            </div> */}


                          
                            

                        </div>
                    </div>


                                
                    <div className="main_r" style={{ display: isDevOpsActive ? 'block' : 'none' }}>
                        <div className="container">
                            <div>
                                <h2>Aws Devops</h2>
                                <p className='star_t'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />

                                </p>
                            </div>
                            <div className='etalic_tax'>
                                <p>
                                    <em>
                                        “I worked with Jitendra from Mahendra’s team.
                                        Jitendra has been responsible for keeping track of our daily AWS Operations.
                                        He’s been delivering up to our expectations and is very eager to learn and be
                                        on alert to deliver within our timelines. Overall, the experience with Jitendra
                                        has been meeting our expectations of him and we look forward to working with
                                        him in the long run.”
                                    </em>
                                </p>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-8">
                                    <div className="pad_y etalic_tax">
                                        <h2>Description</h2>
                                        <p>
                                            <em>
                                                DevOps Engineer who will be responsible to build,
                                                manage, and automate our AWS infrastructure. You will be working and
                                                focusing on AWS infrastructure and automation having great experience
                                                in Github, Jenkins, CICD, Web Services (Apache, Nginx), Middleware(Elasticsearch, Kafka), Linux Shell
                                                Scripting,Python,Database(Mysql, MongoDB). Infrastructure as a code(Terraform, Cloudformation).
                                                Duties & Responsibilities
                                                – Deployment, automation, management, and maintenance of AWS cloud-based production system.
                                                – Ensuring availability, performance, security, and scalability of AWS production systems. – Management
                                                of creation, release, and configuration of production systems. – Evaluation of new technology alternatives
                                                and vendor products. – System troubleshooting and problem resolution across various..
                                            </em>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="br4 etalic_tax">
                                        <h2>Client’s Feedback to you</h2>
                                        <p>
                                            <em>
                                                Mandy is a very friendly and cooperative and great DevOps Skills.
                                                I enjoyed working with him and looking forward for new collaboration
                                                opportunities. I will hire again if I need to work with him for
                                                DevOps Project
                                            </em>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section >
        </>
    )
}

export default ProjectDetails