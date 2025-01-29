import React from 'react';
import "../../assest/css/blogcss/blogCard.css"
import { Link } from 'react-router-dom';
import blog1 from "../../assest/images/blog1.jpg";
import blog2 from "../../assest/images/blog2.jpg";
import blog3 from "../../assest/images/blog3.jpg";
import { BiUser, BiCalendar, BiRightArrowAlt } from "react-icons/bi";
const BlogCard = () =>
{
    return (
        <>
        <section className="blog_card_wrapper">
            <p className='sub_heading_title text-center'>
                WEEKLYY UPDATES
            </p>
            <h2 className='main_heading_title text-center mb-5'>
                Weekly Latest Updates
            </h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Link to="/blog-detail/1">
                            <div className='blog_card'>
                                <div className='blog_card_img'>
                                    <img src={blog1} alt={blog1} />
                                </div>
                                <div className='blog_card_body'>
                                    <span>
                                        <p className='paragraph'>
                                            <BiUser />
                                            12 Dec, 2022
                                        </p>
                                        <p className='paragraph'>
                                            <BiCalendar />
                                            Micheal Hassie
                                        </p>
                                    </span>
                                    <h3 className='service_title mb-3'>
                                        Richard McClintock, a Latin scholar from
                                    </h3>
                                    <Link to="/blog-detail/id">
                                        Read Details <BiRightArrowAlt />
                                    </Link>
                                </div>
                            </div>

                        </Link>
                    </div>

                    <div className='col-md-4'>
                        <Link to="/blog-detail/1">
                            <div className='blog_card'>
                                <div className='blog_card_img'>
                                    <img src={blog2} alt={blog2} />
                                </div>
                                <div className='blog_card_body'>
                                    <span>
                                        <p className='paragraph'>
                                            <BiUser />
                                            12 Aug, 2022
                                        </p>
                                        <p className='paragraph'>
                                            <BiCalendar />
                                            Priya Aggarwal
                                        </p>
                                    </span>
                                    <h3 className='service_title mb-3'>
                                        Global Business Goal Make Life Easy From
                                    </h3>
                                    <Link to="/blog-detail/id">
                                        Read Details <BiRightArrowAlt />
                                    </Link>
                                </div>
                            </div>

                        </Link>
                    </div>
                    <div className='col-md-4'>
                        <Link to="/blog-detail/1">
                            <div className='blog_card'>
                                <div className='blog_card_img'>
                                    <img src={blog3} alt={blog3} />
                                </div>
                                <div className='blog_card_body'>
                                    <span>
                                        <p className='paragraph'>
                                            <BiUser />
                                            16 Jan, 2023
                                        </p>
                                        <p className='paragraph'>
                                            <BiCalendar />
                                            Virat Kohli
                                        </p>
                                    </span>
                                    <h3 className='service_title mb-3'>
                                        Latin derived from Cicero’s 1st-century BC
                                    </h3>
                                    <Link to="/blog-detail/id">
                                        Read Details <BiRightArrowAlt />
                                    </Link>
                                </div>
                            </div>

                        </Link>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default BlogCard