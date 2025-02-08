import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/homepages/Home'
import AboutMore from '../components/aboutpages/AboutMore'
import Team from '../components/teampages/Team'
import TeamCard from '../components/teampages/TeamCard'
import GetTouch from '../components/reusable/GetTouch'
import Service from '../components/servicePages/Service'
import ServiceDetails from '../components/servicePages/ServiceDetails'
import Plan from '../components/planPages/Plan'
import Project from '../components/projects/project'
import AboutService from '../components/aboutpages/aboutServices'
import InnerService from '../components/innerServices/InnerServices'
import ErrorPage from '../ErrorPage';
import TermsPage from '../components/termspages/TermsPage';
import Solutions from '../components/solutions/Solutions';

import { HrmsSolutions } from '../components/solutions/HrmsSolutions';
import { Tms } from '../components/solutions/Tms';
import { Dms } from '../components/solutions/Dms';
import Crm from '../components/solutions/Crm';
//import ItStaff from '../components/servicePages/ItStaff'

const HomeRoutes = () =>
{
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aboutus" element={<AboutMore />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/team-detail/:id" element={<TeamCard />} />
      <Route exact path="/contact" element={<GetTouch />} />

      <Route exact path="/services" element={<Service />}/>
    
      <Route path="/solutions" element={<Solutions />}>
        {/* Nested Route */}
        <Route path="hrmsSolutions" element={<HrmsSolutions />} />
        <Route path='tms' element={<Tms />} />
        <Route path='dms' element={<Dms />} />
        <Route path='Crm' element={<Crm />} />
      </Route>


      <Route exact path="/plan" element={<Plan />} />
      <Route exact path="/project" element={<Project />} />
      <Route exact path="/:link" element={<TermsPage />} />
      <Route exact path="/service/:identity" element={<ServiceDetails />} />
      <Route exact path="/project/:projectId" element={<Project />} />
      <Route exact path="/service/detail/:id" element={<AboutService />} />
      <Route exact path="/service/:identity/:link" element={<InnerService />} />
      <Route exact path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default HomeRoutes
