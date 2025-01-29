import React from 'react'
import Layout from '../reusable/Layout'
import AboutContent from './AboutContent';
import "../../assest/css/aboutcss/aboutmore.css";
import Breadcrumb from '../reusable/Breadcrumb';
import AboutServiceCard from './AboutServiceCard';
import TechNeeds from './TechNeeds';
//import TeamMember from '../homepages/TeamMember';
import Reviews from '../reusable/Reviews';
import Quote from '../homepages/Quote';
import BlogCard from '../blogpages/BlogCard';
const AboutMore = () =>
{
    return (
        <Layout>
            <Breadcrumb pageHeader="About Us" />
            <AboutContent />
            <AboutServiceCard />
            <TechNeeds />
            <Reviews />
            <Quote/>
            <BlogCard />
        </Layout>
    )
}

export default AboutMore