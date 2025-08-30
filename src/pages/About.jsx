import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Professional Plumbing Company</title>
        <meta name="description" content="Learn about our experienced team of licensed plumbers. Family-owned plumbing company serving the community with reliable, professional services." />
        <meta name="keywords" content="about us, plumbing company, licensed plumbers, family owned, experienced" />
        <link rel="canonical" href="/about" />
      </Helmet>
      
      <div className="about">
        <div className="container">
          <h1>About Our Plumbing Company</h1>
          <p>
            We are a family-owned and operated plumbing company with over 20 years of experience 
            serving residential and commercial customers. Our team of licensed, bonded, and insured 
            plumbers is committed to providing reliable, professional services.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
