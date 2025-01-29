import React from 'react'
import faqImg from "../../assest/images/faqimg.jpg";
import faqImg2 from "../../assest/images/faqImg2.jpg";
import "../../assest/css/faq.css";
import { BiCopy } from 'react-icons/bi';
import { Accordion } from 'react-bootstrap';
const FAQ = () =>
{
    return (
        <section className='faq_section'>
            <div className='faq_wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='img_wrapping'>
                                <img src={faqImg} alt={faqImg} />
                                <div className="img-2">
                                    <img src={faqImg2} alt={faqImg2} />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='faq_text'>
                                <p className='sub_heading_title2'>
                                    <BiCopy />  TALK ABOUT SOMETHING
                                </p>
                                <h2 className='main_heading_title2'>
                                    HOW CAN WE HELP YOU?
                                </h2>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" open>
                                        <Accordion.Header className='service_title'>Ethical testing rather than ethical interfaces?</Accordion.Header>
                                        <Accordion.Body>
                                            Assertively communicate multidisciplinary content through emerging skills for intermandated e-tailers.
                                            Rapidiously revolutionize emerging supply for interdependent portals.
                                            Monotonectally restore 24/365 leadership for high quality niche markets transform
                                            emerging mindshare...
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className='service_title'>Latin derived from Cicero's 1st-century BC text De</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className='service_title'>Creation timelines for the standard lorem passage.</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FAQ