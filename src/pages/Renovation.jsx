import React from 'react';
import { Helmet } from 'react-helmet-async';
import serv3 from '../assets/images/serv-3.webp';
import finalCtaBg from '../assets/images/plumbero-img16-1.webp';
import FAQ from '../components/sections/FAQ';
import ScrollReveal from '../components/animations/ScrollReveal';

const Renovation = () => {
  const services = [
    {
      number: "01",
      title: "Full Bathroom Remodeling",
      description: "Complete bathroom renovations with custom plumbing layouts and modern fixture installations. We design and install everything from luxury showers to efficient water systems."
    },
    {
      number: "02", 
      title: "Kitchen Renovation Plumbing",
      description: "Professional kitchen plumbing for renovations including sink installations, appliance connections, and complete water line upgrades for modern kitchen functionality."
    },
    {
      number: "03",
      title: "Water Heater Installation & Relocation",
      description: "Expert water heater installation and relocation services. We handle tankless, electric, and gas units with proper sizing and optimal placement for your renovation needs."
    },
    {
      number: "04",
      title: "Sewer Line Replacement & Upgrades", 
      description: "Complete sewer line replacement and upgrade services using modern materials and techniques. We ensure reliable waste management for your renovated spaces."
    },
    {
      number: "05",
      title: "Repiping with Modern Materials",
      description: "Comprehensive pipe replacement services using the latest materials and technology. We upgrade old plumbing systems for improved performance and longevity."
    },
    {
      number: "06", 
      title: "Fixture Upgrades",
      description: "Energy-efficient faucet and sink installations that combine style with sustainability. We help you choose and install fixtures that save water and enhance your space."
    },
    {
      number: "07",
      title: "Custom Plumbing Solutions", 
      description: "Specialized plumbing for wet bars, laundry rooms, and unique spaces. We create custom solutions tailored to your specific renovation vision and functional needs."
    },
    {
      number: "08",
      title: "Outdoor Plumbing", 
      description: "Outdoor kitchen and bathroom plumbing installations. We extend your living space with professional outdoor plumbing solutions built to withstand the elements."
    }
  ];

  const projectTypes = [
    {
      title: "Home Renovations",
      description: "Complete residential renovation plumbing services"
    },
    {
      title: "Duplex, Triplex & ADU's",
      description: "Multi-unit and accessory dwelling unit plumbing"
    },
    {
      title: "Small Commercial",
      description: "Commercial renovation and upgrade projects"
    },
    {
      title: "New Construction",
      description: "Residential new construction plumbing systems"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plumbing Renovation Services | Agresta Plumbing</title>
        <meta name="description" content="Professional plumbing renovation services including bathroom renovations, kitchen upgrades, whole house repiping, basement plumbing, and smart home integrations." />
        <meta name="keywords" content="plumbing renovation, bathroom renovation, kitchen plumbing, repiping, basement plumbing, water efficiency, accessibility plumbing" />
        <link rel="canonical" href="/renovation" />
      </Helmet>
      
      <div className="renovation-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-hero__container">
            <ScrollReveal direction="left" delay={0.1} className="services-hero__content">
              <h1 className="services-hero__title">
                Plumbing Renovation Services
              </h1>
              <p className="services-hero__subtitle">
                Transform your home with professional plumbing renovations. From bathroom remodels to whole-house upgrades, we bring modern efficiency and style to your plumbing systems.
              </p>
              <div className="services-hero__cta">
                <button className="btn btn--primary">
                  Get In Touch
                </button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.2} className="services-hero__image">
              <img src={serv3} alt="Plumbing Renovation Services" />
            </ScrollReveal>
          </div>
        </section>

        {/* Services Overview */}
        <section className="services-overview">
          <div className="services-overview__container">
            <div className="services-overview__header">
              <h2>Why Choose Our Renovation Services?</h2>
              <p>
                Our renovation specialists combine technical expertise with design insight to create plumbing systems that are both functional and beautiful. We handle projects of all sizes with precision and care.
              </p>
            </div>
            <div className="services-overview__features">
              <ScrollReveal direction="up" delay={0.1} className="feature">
                <h3>Design Consultation</h3>
                <p>Expert guidance on layouts, fixtures, and modern plumbing solutions</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2} className="feature">
                <h3>Project Management</h3>
                <p>Coordinated renovation process with clear timelines and communication</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3} className="feature">
                <h3>Quality Materials</h3>
                <p>Premium fixtures and materials for lasting beauty and performance</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.4} className="feature">
                <h3>Code Compliance</h3>
                <p>All renovations meet current building codes and safety standards</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services List - Using Working With Us Structure */}
        <section className="how-it-works">
          <div className="how-it-works__container">
            <h2 className="how-it-works__title">Our Renovation Specialties</h2>
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

        {/* Project Types Section */}
        <section className="project-types">
          <div className="project-types__container">
            <div className="project-types__header">
              <h2>Project Types We Handle</h2>
              <p>From residential homes to commercial spaces, we provide expert plumbing solutions for every type of project.</p>
            </div>
            <div className="project-types__grid">
              {projectTypes.map((type, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.15 + 0.1} className="project-type-card">
                  <h3 className="project-type-card__title">{type.title}</h3>
                  <p className="project-type-card__description">{type.description}</p>
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

export default Renovation;
