import React, { useState, useRef } from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import emailjs from '@emailjs/browser';

const ContactForm = ({ title, heading, paragraph }) =>
{
    const formRef = useRef(null);

    const [data, setData] = useState({
        fullName: "",
        email: "",
        phone: "",
        queryOption: "",
        message: ""
    });

    const handleInput = (e) =>
    {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_o973o7o', 'template_j681l3l', formRef.current, 'gvcEgND0mIoGRksY2')
            .then((result) =>
            {
                console.log(result.text);
                setData("");
                alert("Query submitted succesfully");

            })
            .catch((error) =>
            {
                console.log(error.text);
            });
    };

    return (
        <>
            <form ref={formRef} className='contact_us_form' onSubmit={sendEmail}>
                <p className='detail_text2 text-center'>{title}</p>
                <h3 className='main_heading_title text-center'>{heading}</h3>
                <p className='paragraph'>{paragraph}</p>
                <div className="form-row">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleInput}
                                value={data.fullName}
                                name='fullName'
                                placeholder="Full Name"
                            />
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" onChange={handleInput} value={data.email} name='email' placeholder="Email Address" />
                        </div>
                        <div class="col-md-6">
                            <input type="tel" class="form-control" onChange={handleInput} value={data.phone} name='phone' placeholder="Phone" />
                        </div>
                        <div class="col-md-6">
                            <select class="form-select" name='queryOption' onChange={handleInput} value={data.queryOption}>
                                <option selected>Web Development</option>
                                <option value="UI Design">UI Design</option>
                                <option value="CMS Developement">CMS Developement</option>
                                <option value="WordPress Developement">WordPress Developement</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <textarea class="form-control" name="message" onChange={handleInput} value={data.message} placeholder='Type Your Message' id="messageBox" rows="4"></textarea>
                        </div>

                    </div>
                </div>
                <div className='d-flex submt_btn_div justify-content-center mt-4'>
                    <button className="blue_btn" type='submit'>
                        Send A Message <BiRightArrowAlt />
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;