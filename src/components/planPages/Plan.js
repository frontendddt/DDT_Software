import React from 'react'
import Layout from '../reusable/Layout'
import Breadcrumb from '../reusable/Breadcrumb'
import PlanCard from './planCard';
import "../../assest/css/plan.css";
const Plan = () =>
{
  return (
    <Layout>
      <Breadcrumb pageHeader="Plan" />
      <div className='container'>
        <div className='plan_section'>
          <div className='plan_wrapper'>
            <PlanCard />
          </div>
        </div>
      
      </div>
  
    </Layout>
  )
}

export default Plan