
import Breadcrumb from "../reusable/Breadcrumb";
import { useEffect, useState } from "react";
import dmsData from '../../assest/css/Solutions/dms.json';

export const Dms = () =>
{
    const [dmsdata, setDmsdata] = useState([]);

    useEffect(() =>
    {
        setDmsdata(dmsData.sections);
    }, []);

    return (
        <>
            <Breadcrumb pageHeader="Document Management Systems" />
            <section>
                <div className="tms_bg">
                    <div className="pt-5 pb-5 container" style={{ maxWidth: '1000px' }}>
                        <h2 className="main_heading_title text-center">Document Management Systems </h2>

                        <div>
                            <p className='paragraph_element'>
                                <b style={{ fontSize: '20px' }}>DDT Software Provides </b>
                                Provides a Document Management systems designed to store, manage, and track electronic documents and
                                images of paper-based information. Emphasize its role in digitizing, organizing, and streamlining document-centric
                                processes for businesses. Where organizations generate and manage large volumes of documents. Highlight how DMS helps
                                in reducing paper-based clutter, improving document accessibility, ensuring compliance, and securing sensitive information.
                            </p>
                            <div>

                                <div class="accordion" id="accordionExample">
                                    {
                                        dmsdata.map((dmsElement, index) =>(
                                            <div class="accordion-item" key={index}>
                                                <h2 class="accordion-header">
                                                    <button
                                                        class="accordion-button" 
                                                        type="button" 
                                                        data-bs-toggle="collapse" 
                                                        data-bs-target={`#parent${index}`} 
                                                        aria-expanded="true" 
                                                        aria-controls={`parent${index}`}
                                                    >
                                                        {dmsElement.title}
                                                    </button>
                                                </h2>
                                                <div id={`parent${index}`} class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">

                                                        <ul className='liststyleHrm'>
                                                            {
                                                                dmsElement.items.map((liItems, index) => (
                                                                    <li className="mt-3" key={`0${index}`}>
                                                                        <strong>{liItems.heading} </strong><br></br>
                                                                        {liItems.detail_of_heading}
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
            </section>
        </>
    )
}