import React, { useEffect, useState } from 'react';
import "../../assest/css/team.css";
import
{
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsLinkedin
} from "react-icons/bs";
import { Link } from 'react-router-dom';
import NewCarousel from '../reusable/NewCarousel';
import TeamDetailsArray from '../ArrayFiles/teamDetailsArray';
const TeamMember = () =>
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
        <section className={scroll ? "team_mem_wrapper active" : "team_mem_wrapper "}>
            <p className='sub_heading_title text-center'>
                GREAT TEAM MEMBERS
            </p>
            <h2 className='main_heading_title text-center mb-2 mb-md-5'>
                WE HAVE EXPERT TEAM
            </h2>
            <div className='team_leaders'>
                <div className='container'>
                    <NewCarousel show={3}>
                        {
                            TeamDetailsArray.map((index, id) =>
                            {
                                return (
                                    <>
                                        <div className='content_carousel' key={id}>
                                            <Link to={`/team-detail/${id + 1}`}>
                                                <div className='team_style_card card'>
                                                    <div className='img_wrap'>
                                                        <img src={index.image} alt={index.image} />
                                                        <div className='social'>
                                                            <div>
                                                                <p className='mb-0' to="/">
                                                                    <BsFacebook />
                                                                </p>
                                                                <p className='mb-0' to="/">
                                                                    <BsInstagram />
                                                                </p>
                                                                <p className='mb-0' to="/">
                                                                    <BsTwitter />
                                                                </p>
                                                                <p className='mb-0' to="/">
                                                                    <BsLinkedin />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h3 className='service_title text-center mt-2 mt-md-5 mb-2'>
                                                        {index.name}
                                                    </h3>
                                                    <p className='detail_text2 text-center mb-2 mb-md-5 mt-0'>{index.degination}</p>
                                                </div>
                                            </Link>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </NewCarousel>
                </div>
            </div>
        </section>

    )
}

export default TeamMember