import React from 'react';
import { Helmet } from 'react-helmet-async';
import serv2 from '../assets/images/serv-2.webp';
import finalCtaBg from '../assets/images/plumbero-img16-1.webp';
import FAQ from '../components/sections/FAQ';
import ScrollReveal from '../components/animations/ScrollReveal';

const PlumbingServices = () => {
  const services = [
    {
      number: "01",
      title: "Leak Detection & Repair",
      description: "Advanced leak detection for water and sewer lines using state-of-the-art equipment. We locate and repair leaks quickly to prevent water damage and costly repairs."
    },
    {
      number: "02", 
      title: "Drain Cleaning & Maintenance",
      description: "Professional drain cleaning services for kitchen, bathroom, and sewer lines. We use hydro-jetting and advanced tools to clear blockages and maintain optimal flow."
    },
    {
      number: "03",
      title: "Water Heater Service",
      description: "Complete water heater installation, repairs, and maintenance. We work with all types including tankless, electric, and gas water heaters for optimal performance."
    },
    {
      number: "04",
      title: "Sewer & Drain Line Inspection", 
      description: "Camera inspection services and hydro-jetting for sewer and drain lines. We identify problems before they become major issues and provide thorough cleaning solutions."
    },
    {
      number: "05",
      title: "Toilet Repair & Installation",
      description: "Professional toilet repair and installation services. From simple fixes to complete replacements, we ensure your bathroom fixtures work perfectly."
    },
    {
      number: "06", 
      title: "Fixture Repair & Installation",
      description: "Expert installation and repair of sinks, faucets, showers, and disposals. We handle all your fixture needs with precision and quality craftsmanship."
    },
    {
      number: "07",
      title: "Backflow Testing & Prevention", 
      description: "Certified backflow testing and prevention services to protect your water supply. We ensure compliance with local regulations and maintain water safety."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Plumbing Services | Agresta Plumbing</title>
        <meta name="description" content="Comprehensive plumbing services including leak detection, drain cleaning, water heater service, sewer inspection, toilet repair, fixture installation, and backflow testing." />
        <meta name="keywords" content="plumbing services, leak detection, drain cleaning, water heater, sewer inspection, toilet repair, fixture installation, backflow testing" />
        <link rel="canonical" href="/plumbing-services" />
      </Helmet>
      
      <div className="plumbing-services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-hero__container">
            <ScrollReveal direction="left" delay={0.1} className="services-hero__content">
              <h1 className="services-hero__title">
                Professional Plumbing Services
              </h1>
              <p className="services-hero__subtitle">
                From emergency repairs to routine maintenance, our licensed plumbers deliver reliable solutions for all your plumbing needs. We're Hamilton's trusted team, available for emergency repairs.
              </p>
              <div className="services-hero__cta">
                <button className="btn btn--primary">
                  Get In Touch
                </button>

              </div>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.2} className="services-hero__image">
              <img src={serv2} alt="Professional Plumbing Services" />
            </ScrollReveal>
          </div>
        </section>

        {/* Services Overview */}
        <section className="services-overview">
          <div className="services-overview__container">
            <div className="services-overview__header">
              <h2>Why Choose Our Plumbing Services?</h2>
              <p>
                With years of experience and a commitment to excellence, we provide comprehensive plumbing solutions that you can trust. Our team uses the latest technology and techniques to ensure lasting results.
              </p>
            </div>
            <div className="services-overview__features">
              <ScrollReveal direction="up" delay={0.1} className="feature">
                <h3>Licensed & Insured</h3>
                <p>Fully licensed, bonded, and insured for your peace of mind</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2} className="feature">
                <h3>Upfront Pricing</h3>
                <p>Transparent pricing with no hidden fees or surprises</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3} className="feature">
                <h3>Quality Guarantee</h3>
                <p>All work backed by our comprehensive warranty</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services List - Using Working With Us Structure */}
        <section className="how-it-works">
          <div className="how-it-works__container">
            <h2 className="how-it-works__title">Our Comprehensive Plumbing Services</h2>
            <div className="how-it-works__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {services.map((service, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1 + 0.1} className="how-it-works__card">
                  <span className="how-it-works__card__number">{service.number}</span>
                  <h3 className="how-it-works__card__title">{service.title}</h3>
                  <p className="how-it-works__card__description">{service.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <section className="final-cta"
        style={{
          '--finalCtaBg': `url(${finalCtaBg})`
        }}>
          <div className="final-cta__container">
          <ScrollReveal direction="up" delay={0.1}>
          <h2 className="final-cta__title">Start With Value. Prevent Bigger Problems.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
              <p className="final-cta__description">$50 Off Any Plumbing Repair Over $300 <span style={{color: "rgb(243 244 131)"}}>Limited Time Offer</span></p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <button className="btn btn--primary btn--large">
                Call Now
              </button>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlumbingServices;
