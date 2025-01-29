import React from 'react'
import progress1 from "../../assest/images/process1.svg";
import progress2 from "../../assest/images/process2.svg";
import progress3 from "../../assest/images/process3.svg";
import progress4 from "../../assest/images/process4.svg";
import arrowImg from "../../assest/images/proccesarrow.png";
import arrowImgUp from "../../assest/images/process-arrow2.png";
import "../../assest/css/workprogress.css";
const WorkProgress = () =>
{
    return (
        <section className='work_p_wrapper'>
            <p className='sub_heading_title text-center'>
                Work Process
            </p>
            <h2 className='main_heading_title text-center'>
                WE FOLLOW GREAT PROCESS
            </h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6 work_card'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress1} alt={progress1} />
                                <p>
                                    01
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                CONSULTATION
                            </h2>
                            <p className='paragraph text-justify'>
                                We schedule a phone call to discuss your needs, issues, goals, strategies, and resource availability.
                            </p>
                        </div>
                        <div className='work_p_arrow'>
                            <img src={arrowImg} alt={arrowImg} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 work_card2'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress2} alt={progress2} />
                                <p>
                                    02
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                Discovery
                            </h2>
                            <p className='paragraph text-justify'>
                                OpSourced is given access to view your environments, or (after signing a mutual NDA)
                                we schedule a second call with your engineering teams to walk through the current
                                state of your infrastructure, DevOps practices, and strategies.
                            </p>
                        </div>
                        <div className='work_p_arrow_up work_p_arrow '>
                            <img src={arrowImgUp} alt={arrowImgUp} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 work_card'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress3} alt={progress3} />
                                <p>
                                    03
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                SCOPE OF WORK
                            </h2>
                            <p className='paragraph text-justify'>
                                We create a scope of work with details about work to be done, including time estimates, responsibilities and requirements for both teams, deliverables, and expectations for start and completion dates.
                            </p>
                        </div>
                        <div className='work_p_arrow'>
                            <img src={arrowImg} alt={arrowImg} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 work_card2'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress4} alt={progress4} />
                                <p>
                                    04
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                PLAN OF ACTION
                            </h2>
                            <p className='paragraph text-justify'>
                                Once the Scope of Work is signed and the deposit is paid, the plan of action goes into effect, and work is scheduled.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-3 col-sm-6 work_card'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress1} alt={progress1} />
                                <p>
                                    05
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                Communication
                            </h2>
                            <p className='paragraph text-justify'>
                                A shared slack channel is created so our engineers can coordinate with your team in real time as they begin work.
                            </p>
                        </div>
                        <div className='work_p_arrow'>
                            <img src={arrowImg} alt={arrowImg} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 work_card2'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress2} alt={progress2} />
                                <p>
                                    06
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                Final Handoff
                            </h2>
                            <p className='paragraph text-justify'>
                                The itemized deliverables are presented and environments are provisioned and turned over to the customer for testing and requests for revision.
                            </p>
                        </div>
                        <div className='work_p_arrow_up work_p_arrow '>
                            <img src={arrowImgUp} alt={arrowImgUp} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 work_card'>
                        <div className='work_p_content'>
                            <div className='work_p_img'>
                                <img src={progress3} alt={progress3} />
                                <p>
                                    07
                                </p>
                            </div>

                        </div>
                        <div className='work_p_text'>
                            <h2 className='service_title '>
                                Next Step
                            </h2>
                            <p className='paragraph text-justify'>
                                Customer takes ownership or rolls over to Managed DevOps for ongoing support and Operational Responsibilities are assumed by the OpSourced team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProgress