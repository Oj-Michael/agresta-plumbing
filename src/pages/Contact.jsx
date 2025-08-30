import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Get Your Free Plumbing Estimate</title>
        <meta name="description" content="Contact our professional plumbers for a free estimate. Available 24/7 for emergency plumbing services. Call now or request a quote online." />
        <meta name="keywords" content="contact plumber, free estimate, emergency plumbing, plumbing quote, 24/7 service" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      
      <div className="contact-page">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Get in touch with our professional plumbers for all your plumbing needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
