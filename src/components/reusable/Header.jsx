import React, { useState } from 'react'
import logoImg from "../../assest/images/mainlogo.jpg";
import "../../assest/css/header.css";
import
{
  BiPhoneCall,
  BiEnvelope,
  BiMap,
  BiRightArrowAlt,
  BiMenu
} from "react-icons/bi";
// import logo from "../../assest/images/logomain.png"
import { Link, NavLink } from 'react-router-dom';
import serviceArray from '../ArrayFiles/serviceArray';

// import styled from 'styled-components';
// import { DropdownContainer, DropdownContent, DropdownItem } from './YourDropdownStyles';


// const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const   DropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1;

//   ${DropdownContainer}:hover & {
//     display: block;
//   }
// `;

// const DropdownItem = styled(NavLink)`
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;

//   &:hover {
//     background-color: #f1f1f1;
//   }
// `;

// const SubDropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 2;

//   ${DropdownItem}:hover & {
//     display: block;
//   }
// `;

// const SubDropdownItem = styled(NavLink)`
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;

//   &:hover {
//     background-color: #f1f1f1;
//   }
// `;

const Header = () =>
{
  const [toggle, setToggle] = useState(false)

  // const DropdownItemWithSubDropdown = ({ to, children, subDropdownItems }) => (
  //   <DropdownItem>
  //     <NavLink className="nav_item" to={to}>
  //       {children}
  //     </NavLink>
  //     {subDropdownItems && (
  //       <SubDropdownContent>
  //         {subDropdownItems.map((subItem, index) => (
  //           <SubDropdownItem key={index} to={subItem.to}>
  //             {subItem.label}
  //           </SubDropdownItem>
  //         ))}
  //       </SubDropdownContent>
  //     )}
  //   </DropdownItem>
  // );
  return (
    <>
      <div className='headerWrap'>
        <section className='container-fluid'>
          <div className='row'>
            <div className='col-md-5' style={{ alignItems: 'center', display: 'flex' }}>
              <div className='logo'>
                <NavLink to="/"><img src={logoImg} alt={logoImg} /></NavLink>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='reach_out_wrap'>
                <div className='contact_dt_card'>
                  <span>
                    <BiPhoneCall />
                  </span>
                  <div>
                    <p>Call Anytime 24/7</p>
                    <Link>(+91 9810944806)</Link>
                  </div>
                </div>
                <div className='contact_dt_card'>
                  <span>
                    <BiEnvelope />
                  </span>
                  <div>
                    <p>Mail Us for support</p>
                    <Link>info@ddtsoftwareandecommerce.com</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container menu_wrapper py-0'>
          <nav className='navbar_desk'>
            <BiMenu onClick={() => setToggle(!toggle)} className='toggle_icon' />
            <ul className={!toggle ? "main_links" : "mobile_links"}>
              <div className='mobile_logo'>
                <img src={logoImg} alt={logoImg} />
              </div>
              <li>
                <NavLink className="nav_item" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="nav_item" to="/team">Team</NavLink>
              </li>
              <li>
                <div class="dropdown">
                  <NavLink className="nav_item dropbtn" to="/services">Services</NavLink>
                  <div class="dropdown-content">

                    <NavLink className="top" to="/service/web-services">Web Development
                      <div className="side">
                        {serviceArray[0].servincld.map((element) =>
                        {
                          return <NavLink to={`/service/web-services/${element.link}`}>{element.ser}</NavLink>
                        })
                        }
                      </div>
                    </NavLink>

                    <NavLink className="top" to="/service/digital-marketing">Digital Marketing
                      <div className="side">
                        {serviceArray[1].servincld.map((element) =>
                        {
                          return <NavLink to={`/service/digital-marketing/${element.link}`}>{element.ser}</NavLink>
                        })
                        }
                      </div>
                    </NavLink>

                    <NavLink className="top" to="/service/mobile-services">Mobile App Development
                      <div className="side">
                        {serviceArray[2].servincld.map((element) =>
                        {
                          return <NavLink to={`/service/mobile-services/${element.link}`}>{element.ser}</NavLink>
                        })
                        }
                      </div>
                    </NavLink>

                    <NavLink className="top" to="/service/devops-services">DevOps Services
                      <div className="side">
                        {serviceArray[3].servincld.map((element) => (
                          <NavLink key={element.id} to={`/service/devops-services/${element.link}`}>{element.ser}</NavLink>
                        ))}
                      </div>
                    </NavLink>

                    <NavLink className="top" to="/service/cloud-services">Cloud Services
                      <div className="side">
                        {serviceArray[4].servincld.map((element) => (

                          <NavLink to={`/service/cloud-services/${element.link}`}>{element.ser}</NavLink>
                        ))
                        }
                      </div>
                    </NavLink>

                    <NavLink className="top" to="/service/IT Staff Augmentation">IT Staff Augmentation Services
                      <div className="side">
                        {serviceArray[5].servincld.map((element) =>
                        {
                          return <NavLink to={`/service/IT Staff Augmentation/${element.link}`}>{element.ser}</NavLink>
                        })
                        }
                      </div>
                    </NavLink>

                    <NavLink className="top" to="/service/ecommerce-services">E-Commerce Solutions
                      <div className="side">
                        {serviceArray[6].servincld.map((element) =>
                        {
                          return <NavLink to={`/service/ecommerce-services/${element.link}`}>{element.ser}</NavLink>
                        })
                        }
                      </div>
                    </NavLink>

                  

                   

                  
                  </div>
                </div>
              </li>

              <li>
                <div class="dropdown">
                  <NavLink className="nav_item dropbtn" to="/solutions">Solutions</NavLink>
                  <div class="dropdown-content">

                    <NavLink className="top" to="/solutions/hrmsSolutions">HRMS Solutions
                    </NavLink>

                    <NavLink className="top" to="/solutions/tms">Task Management Systems
                    </NavLink>

                    <NavLink className="top" to="/solutions/crm">CRM Solutions for Education based Immigration Company </NavLink>

                    <NavLink className="top" to="/solutions/dms"> Document Management Systems</NavLink>

                  </div>
                </div>
              </li>

              <li>
                <NavLink className="nav_item" to="/project/1">Project</NavLink>
              </li>
              <li>
                <NavLink className="nav_item" to="/plan">Plan</NavLink>
              </li>
              <li>
                <NavLink className="nav_item" to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink className="nav_item" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <Link className="cta" to="/contact">
              <span>Get In Touch</span>
              <BiRightArrowAlt />
            </Link>
          </nav>
        </section>
      </div>


    </>

  )
}

export default Header