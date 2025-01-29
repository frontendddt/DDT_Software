import React from 'react'
import Layout from '../reusable/Layout'
import Breadcrumb from '../reusable/Breadcrumb'
// import ErrorPage from '../../ErrorPage'
import ProjectDetails from './projectDetails'
import { useParams } from 'react-router-dom'

const Project = () =>
{
    const { projectId } = useParams();
    return (

        <Layout>
            <Breadcrumb pageHeader="Projects" />
            <ProjectDetails projectId={projectId}/>
            {/* <ErrorPage alertMessage={"We Will Update it soon "}/> */}
        </Layout>
    )
}

export default Project