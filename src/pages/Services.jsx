import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Plumbing Services | Complete Plumbing Solutions</title>
        <meta name="description" content="Complete plumbing services including emergency repairs, water heater installation, drain cleaning, leak detection, and more. Licensed professional plumbers." />
        <meta name="keywords" content="plumbing services, emergency repairs, water heater, drain cleaning, leak detection, sewer repair" />
        <link rel="canonical" href="/services" />
      </Helmet>
      
      <div className="services-page">
        <div className="container">
          <h1>Our Plumbing Services</h1>
          <p>
            We offer comprehensive plumbing services for residential and commercial properties.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
