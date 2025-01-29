import React from 'react'
import Layout from '../reusable/Layout'
import Breadcrumb from '../reusable/Breadcrumb'
import ServiceCard from './ServiceCard'

const Service = () =>
{
    return (
        <>
            <Layout>
                <Breadcrumb pageHeader="Service" />
                <ServiceCard/>
            </Layout>
        </>
    )
}

export default Service