import React, { useEffect, useState } from 'react';
import "../../assest/css/team.css";
// import{ BsFacebook,BsInstagram, BsTwitter,BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import NewCarousel from '../reusable/NewCarousel';
// import TeamDetailsArray from '../ArrayFiles/teamDetailsArray';
// import reactProject from '../../assest/images/reactProject.png'
import projectArray from '../ArrayFiles/projectArray';
import newProjectsArray from '../ArrayFiles/newProjectsArray';
// import { div } from '@tensorflow/tfjs';
const DisplayProjects = () =>
{
    const [scroll, setScroll] = useState(false);
    useEffect(() =>
    {
        window.addEventListener("scroll", () =>
        {
            setScroll(window.scrollY > 5)
        })
    }, [])
    return (

        // <section className={scroll ? "team_mem_wrapper active" : "team_mem_wrapper "}>
        //     <p className='sub_heading_title text-center'>
        //         Our Projects
        //     </p>
        //     <h2 className='main_heading_title text-center mb-2 mb-md-5'>
        //         WE HAVE EXPERT TEAM
        //     </h2>
        //     <div className='team_leaders'>
        //         <div className='container'>
        //             <NewCarousel show={1}>
        //                 {
        //                     projectArray.map((index, id) =>
        //                     {
        //                         return (
        //                             <>
        //                                 <div className='content_carousel' key={id}>
        //                                     <Link to={`/project/${id + 1}`}>
        //                                         <div className='team_style_card card'>
        //                                             <div className='img_wrap'>
        //                                                 <img src={index.imageUrl} alt={index.image} style={{ height: '500px' }} />
        //                                             </div>
        //                                             <h3 className='service_title text-center mt-2 mt-md-5 mb-2'>
        //                                                 {index.title}
        //                                             </h3>
        //                                             <p className='detail_text2 text-center mb-2 mb-md-5 mt-0'>{index.degination}</p>
        //                                         </div>
        //                                     </Link>
        //                                 </div>
        //                             </>
        //                         )
        //                     })
        //                 }
        //             </NewCarousel>
        //         </div>
        //     </div>
        // </section>

        <>
            <section className={scroll ? "team_mem_wrapper active" : "team_mem_wrapper "}>
                <p className='sub_heading_title text-center'>
                    Projects
                </p>
                <h2 className='main_heading_title text-center mb-2 mb-md-5'>
                    Our Portfolio
                </h2>

                <div className='row' style={{ width: "100%" }}>
                    {
                        newProjectsArray.map((index) =>
                        {
                            return (
                                <div className='col-md-3' >
                                    <a href={index.link} key={index.id} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><img src={index.imageUrl} alt="" style={{ width: '100%' }} />
                                        <h6 style={{ textAlign: 'center', padding: '10px', color:"#000" }}>{index.prodetail}</h6></a>
                                </div>
                            );
                        })
                    }
                </div>
                <div className=' mt-5 text-center'>
                    <Link class="smoke_btn" to="/project/1">Read More </Link>
                </div>
            </section>

        </>
    )
}

export default DisplayProjects;
