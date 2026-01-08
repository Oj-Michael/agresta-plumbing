import React from 'react';
import { Helmet } from 'react-helmet-async';
import serv1 from '../assets/images/serv-1.webp';
import finalCtaBg from '../assets/images/plumbero-img16-1.webp';
import ScrollReveal from '../components/animations/ScrollReveal';

const CommercialServices = () => {
  const operatingValues = [
    {
      title: "Professional & Reliable",
      description: "We show up prepared, work efficiently, and complete jobs to a high professional standard—every time."
    },
    {
      title: "On-Time & Organized",
      description: "Clear scheduling, realistic timelines, and dependable attendance you can plan around."
    },
    {
      title: "Clear Communication",
      description: "Direct updates, straightforward answers, and coordination with builders, site supers, and property managers."
    },
    {
      title: "Clean & Respectful Worksites",
      description: "Job sites are kept organized and safe, with minimal disruption to occupants and surrounding trades."
    }
  ];

  const services = [
    {
      title: "Commercial New Builds & Installations",
      description: "Complete plumbing system installs for office renovations, retail spaces, and multi-unit commercial buildings—from rough-ins to final fixtures."
    },
    {
      title: "Repairs, Upgrades & Retrofits",
      description: "Professional repairs, system upgrades, and plumbing improvements for existing commercial properties."
    },
    {
      title: "Multi-Unit & Mixed-Use Properties",
      description: "Experienced working in occupied and active buildings, coordinating work to reduce downtime and disruption."
    },
    {
      title: "Code-Compliant, Inspection-Ready Work",
      description: "All commercial plumbing is completed to current Ontario building codes and inspection standards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Plumbing Services | Agresta Plumbing</title>
        <meta name="description" content="Professional commercial plumbing for offices, retail, and multi-unit buildings in Hamilton, Burlington, and Oakville. Trusted by property managers, builders, and developers." />
        <meta name="keywords" content="commercial plumbing, office plumbing, retail plumbing, multi-unit plumbing, Hamilton commercial plumber, Burlington commercial plumber, Oakville commercial plumber" />
        <link rel="canonical" href="/commercial-services" />
      </Helmet>
      
      <div className="plumbing-services-page">
        {/* Section 1: Commercial Hero */}
        <section className="services-hero">
          <div className="services-hero__container">
            <ScrollReveal direction="left" delay={0.1} className="services-hero__content">
              <h1 className="services-hero__title">
                Commercial Plumbing Services
              </h1>
              <p className="services-hero__subtitle">
                Professional Commercial Plumbing for Offices, Retail & Multi-Unit Buildings. Serving Hamilton, Burlington & Oakville with reliable plumbing installs, repairs, and upgrades for businesses, builders, and property managers.
              </p>
              <div className="services-hero__cta">
                <button className="btn btn--primary">
                  Request a Quote
                </button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.2} className="services-hero__image">
              <img src={serv1} alt="Commercial Plumbing Services" />
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: How We Operate (Trust & Business Values) */}
        <section className="services-overview">
          <div className="services-overview__container">
            <div className="services-overview__header">
              <h2>How We Operate</h2>
              <p>
                Built on professionalism, reliability, and clear communication—values that matter to property managers, builders, and business owners.
              </p>
            </div>
            <div className="services-overview__features">
              {operatingValues.map((value, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1 + 0.1} className="feature">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Commercial Plumbing Services (Core Capabilities) */}
        <section className="how-it-works">
          <div className="how-it-works__container">
            <h2 className="how-it-works__title">Commercial Plumbing Services</h2>
            <div className="how-it-works__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {services.map((service, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1 + 0.1} className="how-it-works__card">
                  <h3 className="how-it-works__card__title">{service.title}</h3>
                  <p className="how-it-works__card__description">{service.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Who We Work With */}
        <section className="who-we-work-with">
          <div className="who-we-work-with__container">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="who-we-work-with__title">Who We Work With</h2>
              <p className="who-we-work-with__description">
                We regularly work with:
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="who-we-work-with__pills">
                <span className="pill">Property Managers</span>
                <span className="pill">Builders & Developers</span>
                <span className="pill">Site Supervisors</span>
                <span className="pill">Business Owners</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="who-we-work-with__description">
                Across office spaces, retail locations, and multi-unit commercial buildings.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 5: Service Area */}
        <section className="service-area">
          <div className="service-area__container">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="service-area__text">
                Proudly serving commercial clients across <strong>Hamilton, Burlington, and Oakville</strong>.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="final-cta"
        style={{
          '--finalCtaBg': `url(${finalCtaBg})`
        }}>
          <div className="final-cta__container">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="final-cta__title">Need a Reliable Commercial Plumber?</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="final-cta__description">
                Get in touch to discuss your project, request a quote, or schedule service with a trusted local plumbing professional.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <button className="btn btn--primary btn--large">
                Request a Quote
              </button>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommercialServices;

