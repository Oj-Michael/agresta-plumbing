import React from 'react';
import { Helmet } from 'react-helmet-async';
import finalCtaBg from '../assets/images/plumbero-img16-1.webp';
import ScrollReveal from '../components/animations/ScrollReveal';

const Contact = () => {
  const contactInfo = [
    {
      title: "Phone",
      content: "(905) 902-0121",
      description: "Available for emergency repairs"
    },
    {
      title: "Service Area",
      content: "Hamilton & Surrounding Areas",
      description: "Burlington, Oakville, Mississauga, Paris"
    },
    {
      title: "Quality Craftmanship",
      content: "Solid, long-lasting solutions",
      description: "Attention to detail and long-lasting solutions"
    },
    {
      title: "Response Time",
      content: "Same-Day Service",
      description: "Fast, reliable service when you need it"
    }
  ];

  const reasons = [
    "Free Quotes & Estimates",
    "Emergency Service Available",
    "Licensed & Insured",
    "Trusted Local Service"
  ];

  const serviceAreas = [
    "Hamilton",
    "Burlington",
    "Oakville",
    "Mississauga",
    "Paris"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Agresta Plumbing | Call (905) 902-0121</title>
        <meta name="description" content="Contact Agresta Plumbing for reliable service in Hamilton, Burlington, and Oakville. Call (905) 902-0121 for free quotes and emergency service." />
        <meta name="keywords" content="contact plumber, (905) 902-0121, Hamilton plumber, emergency plumbing, free estimate, plumbing quote" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      
      <div className="contact-page">
        {/* Section 1: Contact Hero */}
        <section className="contact-hero">
          <div className="contact-hero__container">
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="contact-hero__title">Get In Touch With Agresta Plumbing</h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="contact-hero__subtitle">
                Professional plumbing services available for residential and commercial needs. Emergency service available.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="contact-hero__phone">
                <a href="tel:9059020121" className="phone-number">Call Now: (905) 902-0121</a>
              </div>
            </ScrollReveal>
            {/* <ScrollReveal direction="up" delay={0.4}>
              <div className="contact-hero__cta">
                <a href="tel:9059020121" className="btn btn--primary btn--large">
                  Call Now
                </a>
              </div>
            </ScrollReveal> */}
          </div>
        </section>

        {/* Section 2: Contact Information Cards */}
        <section className="contact-info">
          <div className="contact-info__container">
            <div className="contact-info__grid">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1 + 0.1} className="contact-info__card">
                  <h3 className="contact-info__card__title">{info.title}</h3>
                  <p className="contact-info__card__content">{info.content}</p>
                  <p className="contact-info__card__description">{info.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why Contact Us */}
        <section className="why-contact">
          <div className="why-contact__container">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="why-contact__title">Why Choose Agresta Plumbing?</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="why-contact__pills">
                {reasons.map((reason, index) => (
                  <span key={index} className="pill">{reason}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
