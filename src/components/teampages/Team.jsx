import React from 'react'
import Layout from '../reusable/Layout'
import Breadcrumb from '../reusable/Breadcrumb'
import Quote from '../homepages/Quote'
import TeamCard from './TeamDetails'

const Team = () =>
{
    return (
        <Layout>
            <Breadcrumb pageHeader="Team" />
            <TeamCard/>
            <Quote />
        </Layout>
    )
}

export default Team