
import hrmsBanner from '../../assest/images/human-resource-hiring-recruiter-select-career-concept.jpg';
import resourseimg from '../../assest/images/recuter-img.jpg';
import "../../assest/css/Solutions/solutions.css";
import solutionsdata from "../../assest/css/Solutions/solutions.json";
import { useEffect, useState } from 'react';

export const HrmsSolutions = () =>
{
    const [solution, setsolution] = useState([]);

    useEffect(() =>
    {
        setsolution(solutionsdata);
    }, []);
    return (
        <section>
            <div className='hrns_banner'>
                <img src={hrmsBanner} alt='hrms-bannner' className='w-100' ></img>
            </div>
            <div className='container pt-5 pb-5'>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
                            <p className='paragraph_element'>
                                <b style={{ fontSize: '20px' }}>DDT Software </b>
                                Provides HRMS Solutions which integrates various HR functions like payroll, recruitment,
                                attendance tracking, performance management, and employee data management into one unified platform including
                                time-saving benefits, improved accuracy, and streamlined HR operations.
                            </p>
                        </div>
                    </div>

                    <div className='col-md-5 mt-5'>
                        <div>
                            <img src={resourseimg} alt='resourseimg' className='w-100'></img>
                        </div>
                    </div>
                    <div className='col-md-7 mt-5 d-flex align-items-center'>
                        <div className='w-100'>
                            <div className="accordion" id="accordionExample">

                                {
                                    solution.map((hrms_element, index) =>
                                    {
                                        return <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                    aria-expanded="false"
                                                    aria-controls={`collapse${index}`}>
                                                    <b>{hrms_element.category}</b>
                                                </button>
                                            </h2>

                                            <div id={`collapse${index}`}
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">

                                                <div className="accordion-body">
                                                    <ul className='liststyleHrm'>
                                                        {
                                                            hrms_element.items.map((hrms_list, index) =>
                                                            {
                                                                return <li key={`xzse${index}`} className='mb-3' style={{
                                                                    fontSize: '15px', color: '#55595d'
                                                                }}>
                                                                    <strong>{hrms_list.heading}</strong><br></br>
                                                                    {hrms_list.detail_of_heading}
                                                                </li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
//export default HrmsSolutions;