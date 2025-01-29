import React from 'react';
import Layout from '../reusable/Layout';
import ITsolutuion from './ITsolutuion';
import Counter from './Counter';
// import TeamMember from './TeamMember';
import FAQ from './FAQ';
import Progress from './Progress';
import Quote from './Quote';
import WorkProgress from './WorkProgress';
import BannerComp from '../reusable/BannerComp';
import ServiceCard from '../servicePages/ServiceCard';
import DisplayProjects from './DisplayProjects';

const Home = () =>
{
    return (
        <Layout>
            <BannerComp />
            <ITsolutuion />
            <ServiceCard/>
            <Counter />
            <DisplayProjects/>
            <FAQ />
            <Progress />
            <Quote />
            <WorkProgress />
        </Layout>

    )
}

export default Home