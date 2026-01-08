import React from 'react';
import { Helmet } from 'react-helmet-async';
import serv2 from '../assets/images/serv-2.webp';
import finalCtaBg from '../assets/images/plumbero-img16-1.webp';
import ScrollReveal from '../components/animations/ScrollReveal';

const ResidentialConstruction = () => {
  const operatingValues = [
    {
      title: "Professional & Reliable",
      description: "Organized, dependable workmanship delivered to a high residential construction standard."
    },
    {
      title: "On-Schedule Execution",
      description: "Plumbing work aligned with build schedules to keep projects moving without delays."
    },
    {
      title: "Clear Communication",
      description: "Straightforward coordination with homeowners, builders, developers, and site supervisors."
    },
    {
      title: "Clean & Safe Worksites",
      description: "Respectful, organized job sites that meet safety standards and minimize disruption."
    }
  ];

  const services = [
    {
      title: "Full Home Plumbing Systems",
      description: "Complete plumbing system installs for new residential builds—from rough-ins to final fixtures."
    },
    {
      title: "Additions, Basements & Suites",
      description: "Plumbing for basement suites, home additions, secondary units, and partial build projects."
    },
    {
      title: "Rough-Ins & Partial Projects",
      description: "Flexible support for rough-ins, system expansions, and phase-based construction work."
    },
    {
      title: "Code-Compliant, Inspection-Ready",
      description: "All residential plumbing completed to current Ontario building codes and inspection requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Residential New Construction Plumbing | Agresta Plumbing</title>
        <meta name="description" content="Complete plumbing solutions for new homes, additions, and residential developments in Hamilton, Burlington, and Oakville. Trusted by homeowners, builders, and developers." />
        <meta name="keywords" content="residential construction plumbing, new home plumbing, home additions plumbing, basement suite plumbing, Hamilton residential plumber, Burlington new construction, Oakville home builder plumber" />
        <link rel="canonical" href="/residential-construction" />
      </Helmet>
      
      <div className="plumbing-services-page">
        {/* Section 1: Residential New Construction Hero */}
        <section className="services-hero">
          <div className="services-hero__container">
            <ScrollReveal direction="left" delay={0.1} className="services-hero__content">
              <h1 className="services-hero__title">
                Residential New Construction Plumbing
              </h1>
              <p className="services-hero__subtitle">
                Complete plumbing solutions for new homes, additions, and residential developments—serving homeowners, builders, developers, and site supervisors across Hamilton, Burlington, and Oakville.
              </p>
              <div className="services-hero__cta">
                <button className="btn btn--primary">
                  Request a Quote
                </button>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.2} className="services-hero__image">
              <img src={serv2} alt="Residential New Construction Plumbing" />
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: How We Operate (Trust & Work Ethic) */}
        <section className="services-overview">
          <div className="services-overview__container">
            <div className="services-overview__header">
              <h2>How We Operate</h2>
              <p>
                Built on professionalism, reliability, and clear communication—values that matter to homeowners, builders, and developers.
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

        {/* Section 3: Residential New Construction Services */}
        <section className="how-it-works">
          <div className="how-it-works__container">
            <h2 className="how-it-works__title">Residential New Construction Services</h2>
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
                We work with:
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="who-we-work-with__pills">
                <span className="pill">Homeowners</span>
                <span className="pill">Builders</span>
                <span className="pill">Developers</span>
                <span className="pill">Site Supervisors</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="who-we-work-with__description">
                On new builds, additions, and residential construction projects of all sizes.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 5: Service Area */}
        <section className="service-area">
          <div className="service-area__container">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="service-area__text">
                Residential new construction plumbing services available throughout <strong>Hamilton, Burlington, and Oakville</strong>.
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
              <h2 className="final-cta__title">Planning a New Residential Build?</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="final-cta__description">
                Contact Agresta Plumbing to discuss your project and get reliable, code-compliant plumbing done right from the start.
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

export default ResidentialConstruction;

