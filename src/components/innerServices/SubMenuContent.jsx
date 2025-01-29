import React from 'react'
// import Layout from '../reusable/Layout'
import "../../assest/css/Servicecss/serviceDetails.css";
// import service1 from "../../assest/images/servicedet1.jpg";
// import service12 from "../../assest/images/servicedet2.jpg";
import service13 from "../../assest/images/servicedet4.jpg";
    // import { BiCheckCircle, BiAlarm, BiRightArrowAlt } from "react-icons/bi";
// import { Accordion } from 'react-bootstrap';
import serviceArray from '../ArrayFiles/serviceArray';
// import innerServices from '../ArrayFiles/innerServices';
import { useParams } from 'react-router-dom';

const SubMenuContent = () =>
{
    const { identity, link } = useParams();

    if (!identity || !link)
    {
        return <p>Invalid URL</p>;
    }

    const selectedService = serviceArray.find(
        (service) => service.identity === identity && service.servincld.some((innerService) => innerService.link === link)
    );

    if (!selectedService)
    {
        return <p>Service not found for the provided parameters</p>;
    }

    const selectedInnerService = selectedService.servincld.find((innerService) => innerService.link === link);

    if (!selectedInnerService)
    {
        return <p>Inner service not found for the provided parameters</p>;
    }
    
    return (
        <>
            <div className='col-lg-8'>
                <div>
                    <div key={selectedService.id} className='it_slt_bsns_t_sec'>
                        <div className='it_slt_bsns_t_sec'>
                            <h2 className='service_title'>{selectedInnerService.ser}</h2>
                            <p>{selectedInnerService.content}</p>
                        </div>
                        <div className='it_slt_bsns_t_sec'>
                            <h3 className='service_title'>{selectedInnerService.mission}</h3>
                            <p>{selectedInnerService.mission_content}</p>
                        </div>
                        <img src={selectedInnerService.pic} alt={service13} style={{ margin: "0 auto", display: "block" }} />
                        <div className='inner-content-st' >
                            <h3 className='sub_heading_title' >{selectedInnerService.head}</h3>
                            <p>{selectedInnerService.innercontent}</p>
                        </div>
                        <div className='inner-content-st' >
                            <h3 className='sub_heading_title'> {selectedInnerService.head2}</h3>
                            <p>{selectedInnerService.innercontent2}</p>
                        </div>
                        <div className='inner-content-st'>
                            <h3 className='sub_heading_title'> {selectedInnerService.head3}</h3>
                            <p>{selectedInnerService.innercontent3}</p>
                        </div>
                    </div>

                    <div key={selectedInnerService.id}>
                        <div className='it_slt_bsns_t_sec'></div>
                    </div>

                    {/* {serviceArray[id-1].servincld.map((element) =>
                                    {
                                        return (
                                            <>
                                                <div key={element.id}>
                                                             <div className='it_slt_bsns_t_sec'>
                                                        <h2 className='service_title'>{element.ser}</h2>
                                                        <p>{element.content}</p>
                                                            </div>
                                                    </div>
                                            </>   
                                        )
                                         return (
                                             <div key={key.id}>
                                                 <div className='it_slt_bsns_t_sec'>
                                                     <h2 className='service_title'>{key.title}</h2>
                                                     <p>{key.content}</p>
                                                 </div>
                                                 <div className='it_slt_bsns_md_sec'>
                                                     <ul>
                                                         <h3 className='sub_heading_title'>{key.title} :</h3>
                                                         {key?.licontent?.map((e, subId) => (
                                                             <li key={subId}>
                                                                 <p className='detail_text'>
                                                                     <BiCheckCircle /> {e.benefits}
                                                                 </p>
                                                             </li>
                                                         ))}
                                                     </ul>
                                                 </div>
                                                 <div className='it_slt_bsns_lt_sec'>
                                                     <img src={service12} alt={service12} />
                                                     <h2 className='service_title head'>{key.faqsHead}</h2>
                                                     <Accordion defaultActiveKey='0'>
                                                         {key.faqs?.map((i, faqId) => (
                                                             <Accordion.Item eventKey={faqId} key={faqId}>
                                                                 <Accordion.Header className='service_title'>{i.que}</Accordion.Header>
                                                                 <Accordion.Body>
                                                                     <p>{i.ans}</p>
                                                                 </Accordion.Body>
                                                             </Accordion.Item>
                                                         ))}
                                                     </Accordion>
                                                 </div>
                                             </div>
                                      )     
                                   })} */}

                </div>
            </div>
        </>
    )
}

export default SubMenuContent