import Breadcrumb from "../reusable/Breadcrumb";
import "../../assest/css/Solutions/solutions.css";
import { useState, useEffect } from "react";
//import sectionbg from "../../assest/images/faqbg2.jpg";
import tsmData from "../../assest/css/Solutions/tms.json";
import tmsimg from "../../assest/images/tms-img.jpg";
export const Tms = () =>
{
    const [tms, setTms] = useState([]);

    useEffect(() =>
    {
        setTms(tsmData.sections);
    }, []);

    return (
        <>
            <Breadcrumb pageHeader="Task Management Systems" />
            <section>
                <div className="tms_bg">
                    <div className="pt-5 pb-5 container" >
                        <h2 className="main_heading_title text-center">Task Management Systems </h2>
                        <div>
                            <div style={{maxWidth:'980px', margin:"0 auto"}}>
                                <p className='paragraph_element'>
                                    <b style={{ fontSize: '20px' }}>DDT Software </b>
                                    Provides Task management Systems as the process of organizing, prioritizing,
                                    and tracking tasks and projects within a team or organization. It helps ensure tasks are
                                    completed on time and that resources are allocated efficiently. It Emphasize the importance of
                                    task management in improving workflow, meeting deadlines, and enhancing team collaboration.
                                    Mention how effective task management leads to increased productivity, better communication,
                                    and clear accountability.
                                </p>
                            </div>

                            <div className="row mt-4">

                                <div className="col-md-5">
                                    <div>
                                        <img src={tmsimg} alt="tms-img" className="w-100" ></img>
                                    </div>
                                </div>

                                <div className="col-md-7 d-flex align-items-center">
                               
                                        <div className="accordion w-100" id="accordionExample">
                                            {tms.map((tmsElement, index) => (
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
                                                            {tmsElement.title}
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
                                                                    tmsElement.items.map((liElement, index) => (
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
                                            ))}
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
