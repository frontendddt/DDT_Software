import Breadcrumb from "../reusable/Breadcrumb";
import crmData from "../../assest/css/Solutions/crm.json";
import CrmImg  from "../../assest/images/crm-img.jpg";
import { useEffect, useState } from "react";
const Crm = () =>{

    const [crm, setCrm] = useState([]);
    useEffect(() =>{
        setCrm(crmData.sections)
    }, []);
    console.log(crm);


    return(
        <>  
            <Breadcrumb pageHeader="CRM Solutions for Immigration & Education Services"/>
            <section>
                <div className="tms_bg">
                    <div className="pt-5 pb-5 container" >
                        <h2 className="main_heading_title text-center">CRM Solutions for Immigration & <br></br>Education Services </h2>
                        <div>
                            <div style={{ maxWidth: '980px', margin: "0 auto" }}>
                                <p className='paragraph_element'>
                                    <b style={{ fontSize: '20px' }}>DDT Software </b>, we understand that managing student education journeys and immigration
                                     processes requires efficiency, precision, and seamless communication. Our CRM
                                      (Customer Relationship Management) solutions are designed specifically for
                                       immigration companies like yours, providing all the tools needed to streamline operations, 
                                       improve customer satisfaction, and ensure compliance.

                                </p>
                            </div>

                            <div className="row mt-4">

                                <div className="col-md-5">
                                    <div>
                                        <img src={CrmImg} alt="tms-img" className="w-100"></img>
                                    </div>
                                </div>

                                <div className="col-md-7 d-flex align-items-center">

                                    <div className="accordion w-100" id="accordionExample">
                                        {
                                            crm.map((crmElement, index) => (
                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#parentQus${index}`}
                                                        aria-expanded="true"
                                                        aria-controls={`parentQus${index}`}
                                                    >
                                                        {crmElement.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`parentQus${index}`}
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <ul className='liststyleHrm'>
                                                            {
                                                                crmElement.items.map((liElement, index) => (
                                                                    <li className="mt-3" key={`0${index}`}>
                                                                        <strong>{liElement.heading} </strong><br></br>
                                                                        {liElement.detail_of_heading}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                             </div>
                                           ))
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Crm;