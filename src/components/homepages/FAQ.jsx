import React, { useState, useEffect } from 'react'
import faqImg from "../../assest/images/faqimg.jpg";
import faqImg2 from "../../assest/images/faqImg2.jpg";
import "../../assest/css/faq.css";
import { BiCopy } from 'react-icons/bi';
import { Accordion } from 'react-bootstrap';

import faqArr from './FaqArr';


console.log(faqArr);
const FAQ = () =>
{
    const [faqArray, setFaqArray] = useState([]);

    useEffect(() =>{
        setFaqArray(faqArr);
    },[]);

    return (
        <section className='faq_section'>
            <div className='faq_wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <div className='img_wrapping'>
                                <img src={faqImg} alt={faqImg} />
                                <div className="img-2">
                                    <img src={faqImg2} alt={faqImg2} />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='faq_text'>
                                <p className='sub_heading_title2'>
                                    <BiCopy />  TALK ABOUT SOMETHING
                                </p>
                                <h2 className='main_heading_title2'>
                                    HOW CAN WE HELP YOU?
                                </h2>
                                <Accordion defaultActiveKey="0">
                                    
                                    {
                                        faqArray.map((element, index) =>(
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header className='service_title'>{element.faqHeading}</Accordion.Header>
                                                <Accordion.Body className='p-2'>
                                                    
                                                    <Accordion defaultActiveKey="025">
                                                      {
                                                        element.subElement.map((elementItem) => (
                                                            <Accordion.Item eventKey={elementItem.id}>
                                                                <Accordion.Header 
                                                                    className='service_title service_Heading'
                                                                  style={{padding:"0px"}}
                                                                  >
                                                                  {elementItem.subHeading}
                                                                </Accordion.Header>
                                                                <Accordion.Body className='service_bodyText'>
                                                               {elementItem.detaild}
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        ))
                                                      }
                                                    </Accordion>

                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))
                                    }

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FAQ;