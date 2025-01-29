import { useEffect, useState } from "react";
//import axios from 'axios';
//import { response } from "express";
import AboutData from './about.json';

const AboutContent = () =>
{
    const [Content, setContent] = useState([]);

    useEffect(() =>
    {
        setContent(AboutData);
    }, []);

   
    return (
        <>
            <section>
                <div className="container">
                    
                    {
                        Content.map((section) => (
                            <div>
                                <div className="mt-5" key={section.id}>
                                    <h3 class="service_title">{section.headingH3} </h3>
                                    <p>{section.titletext}</p>
                                </div>
                                {
                                    section.listcontet.map((sublist) => (
                                        <div className="listItems" key={sublist.id}>
                                            <ul className="liststyle">
                                                <li>
                                                    <b>{sublist.listBold} </b>
                                                    {sublist.listli}
                                                </li>

                                            </ul>
                                        </div>
                                    ))
                                };

                            </div>
                        ))
                    }
                    
                    <section>
                        <div>
                            <h3 class="service_title titleh3m">Key Benefits of Working with DDT Software & E-comm Pvt Ltd:</h3>
                        </div>
                        <div className="listItems">
                            <ul className="liststyle">
                                <li>
                                    <b>Tailored Solutions: </b>
                                    Services are customized to meet the specific needs and objectives of each client.
                                </li>
                                <li>
                                    <b>Expert Team: </b>
                                    Highly skilled professionals with in-depth knowledge and experience across different technologies and industries
                                </li>
                                <li>
                                    <b>End-to-End Services: </b>
                                    From website development to digital marketing and DevOps solutions, offering a full range of services to streamline your business’s digital operations.
                                </li>
                                <li>
                                    <b>Agile Methodologies:  </b>
                                    Agile project management techniques for flexible, iterative development that delivers results faster
                                </li>
                                <li>
                                    <b>Cost-Effective: </b>
                                    Offering competitive pricing without compromising on quality
                                </li>
                                <li>
                                    <b>Customer-Centric Approach:  </b>
                                    Focused on understanding client needs and building long-term partnerships by delivering results that matter
                                </li>

                            </ul>
                        </div>
                    </section>

                    <section>
                        <div>
                            <h3 class="service_title titleh3m">Industries Served:</h3>
                        </div>
                        <div className="listItems">
                            <ul className="liststyle">
                                <li>
                                    E-commerce
                                </li>
                                <li>
                                    Healthcare
                                </li>
                                <li>
                                    Education
                                </li>
                                <li>
                                    Finance and Banking
                                </li>
                                <li>
                                    Real Estate
                                </li>
                                <li>
                                    Travel and Hospitality
                                </li>

                            </ul>
                        </div>
                    </section>

                    <section>
                        <div>
                            <h3 class="service_title titleh3m">Conclusion:</h3>
                        </div>
                        <div className="listItems">
                            <p>DDT Software & E-comm Pvt Ltd stands out as a versatile and reliable digital solutions provider, offering everything from web development and digital marketing to advanced DevOps services. With their expertise and customer-centric approach, they are well-positioned to help businesses
                                navigate the complexities of the digital landscape and achieve sustained growth
                                <br></br><br></br>
                                For more information, you can reach out to DDT Software & E-comm Pvt Ltd directly to explore how their services can help your business succeed in the digital age.

                            </p>
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}
export default AboutContent;