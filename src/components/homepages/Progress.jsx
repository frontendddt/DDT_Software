import React from 'react';
import "../../assest/css/progress.css";
import { BiCopy } from 'react-icons/bi';
import ProgressBar from 'react-bootstrap/ProgressBar';
import progressImg from "../../assest/images/progress.jpg";
const Progress = () =>
{
    const business = 65;
    const career = 90;
    const innovation = 85;

    return (
        <section className='progress_wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='progress_text'>
                            <p className='sub_heading_title'>
                                <BiCopy />  DDT SOFTWARE ACHIEVMENT 
                            </p>
                            <h2 className='main_heading_title'>
                                PROJECT MANAGEMENT AND BUILD TECHNOLOGY
                            </h2>
                            <p className='detail_text' style={{ textAlign: 'justify' }}>
                                Energistically evisculate an expanded array of meta-services after cross-media strategic theme areas.
                                Interactively simplify interactive customer service before fully tested relationship parallel
                                task high standards...
                            </p>

                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        Web Development
                                    </h2>
                                    <h2>
                                        75%
                                    </h2>
                                </div>
                                <ProgressBar now={business} />
                            </div>

                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        Digital Marketing
                                    </h2>
                                    <h2>
                                        60%
                                    </h2>
                                </div>
                                <ProgressBar now={business} />
                            </div>
                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        Mobile App Developement
                                    </h2>
                                    <h2>
                                        70%
                                    </h2>
                                </div>
                                <ProgressBar now={business} />
                            </div>

                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        DevOps Services
                                    </h2>
                                    <h2>
                                        65%
                                    </h2>
                                </div>
                                <ProgressBar now={business} />
                            </div>

                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        Cloud Services
                                    </h2>
                                    <h2>
                                        90%
                                    </h2>
                                </div>
                                <ProgressBar now={career} />
                            </div>

                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        IT Staff Augmentation
                                    </h2>
                                    <h2>
                                        85%
                                    </h2>
                                </div>
                                <ProgressBar now={innovation} />
                            </div>
                            <div className='bars'>
                                <div className='bar_label'>
                                    <h2>
                                        Website Development
                                    </h2>
                                    <h2>
                                        90%
                                    </h2>
                                </div>
                                <ProgressBar now={innovation} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <img src={progressImg} className='img-fluid' alt={progressImg} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Progress