import React from 'react'
import { BiCopy, BiPhoneCall } from 'react-icons/bi';
import { TfiEmail } from "react-icons/tfi";
import aboutcnt from "../../assest/images/aboutuscnt.jpg"
const TechNeeds = () =>
{
  return (

    <>
      <section className='tech_need_wrap'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <p className='sub_heading_title'>
                <BiCopy />GET BEST IT SOLUTION 2024
              </p>
              <h2 className='main_heading_title'>
                Inspiring Tech Needs For Business
              </h2>
              <p className='detail_text'>
                Dynamically monetize web-enabled processes through client-based action items.
                Authoritatively grow goal is oriented markets through ompletely generate
                technically sound content without robust users.
              </p>
              <div className='row my-2 my-lg-4'>
                <div className='col-lg-5 order_box'>
                  <div className='query_cont'>
                    <span>
                      <BiPhoneCall />
                    </span>
                    <span className='call_nm ms-2'>
                      <p className='detail_text mb-1'>Call To ask Any Query</p>
                      <a href="tel:+91 8607013464">
                        +91 9810944806
                      </a>
                    </span>
                  </div>
                </div>
                <div className='col-lg-7 order_box1'>
                  <div className='query_cont queryborder'>
                    <span>
                      <TfiEmail />
                    </span>
                    <span className='call_nm ms-2'>
                      <p className='detail_text mb-1'>Email To ask Any Query</p>
                      <a href="mailto:info@ddtsoftwareandecommerce.com">
                        info@ddtsoftwareandecommerce.com
                      </a>
                    </span>
                  </div>

                </div>
              </div>
              {/* <Link className='blue_btn' to="/aboutus">
              About Us <BiRightArrowAlt />
            </Link> */}
            </div>
            <div className='col-lg-6'>
              <img src={aboutcnt} alt={aboutcnt} className='img-fluid' />
            </div>
          </div>
        </div>
      </section>


    </>
   
  )
}

export default TechNeeds