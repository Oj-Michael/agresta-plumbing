import React from 'react';
import { Helmet } from 'react-helmet-async';
import man from '../assets/images/man-1.jpg';
import ceoImg from '../assets/images/agresta-ceo.webp';
import finalCtaBg from '../assets/images/plumbero-img16-1.webp';
import ScrollReveal from '../components/animations/ScrollReveal';

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

        <section className="about-hero">
        <div className="about__container">
          <div className="about__grid">
            <ScrollReveal direction="left" delay={0.1} className="grid-item">
            <h1>About Our Plumbing Company</h1>
          <p>
            We are a family-owned and operated plumbing company with over 20 years of experience 
            serving residential and commercial customers. Our team of licensed, bonded, and insured 
            plumbers is committed to providing reliable, professional services.
          </p>
          <p>
            We are a family-owned and operated plumbing company with over 20 years of experience 
            serving residential and commercial customers. Our team of licensed, bonded, and insured 
            plumbers is committed to providing reliable, professional services.
          </p>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.2} className="grid-item">
                <img src={man} alt="About Us Agresta" />
            </ScrollReveal>
          </div>
        </div>
        </section>

        {/* About Us and Mission Statement */}
        <section className="bios">
          <div className="bios__container">

            <h2 className="bios__title">Agresta Plumbing Mission Statement</h2>
            <p className="bios__description">
              At Agresta Plumbing, our mission is to deliver the highest standard of plumbing service in Southern Ontario protecting homes, preventing costly problems, and building lasting trust with every homeowner we serve. Francesco's vision is to make Agresta Plumbing a household name by combining modern service, integrity, and education  giving customers not only solutions, but the knowledge to protect their homes with confidence.
            </p>

            <div className="bios__grid">
              <ScrollReveal direction="left" delay={0.1} className="bios-card">
                <span className="subtitle">Meet Francesco</span>
                <h3 className="bios-card__title">The Founder of Agresta Plumbing</h3>
                <p className="bios-card__description">
                Hi, I'm Francesco Agresta, the founder of Agresta Plumbing. Plumbing isn't just my trade it's my passion. I take pride in treating every home as if it were my own, making sure nothing is left unchecked and that you always feel secure with the work I provide. My goal is simple: deliver reliable, honest service that keeps your home safe, and give you the peace of mind knowing you've got a plumber you can trust.
                </p>
              </ScrollReveal>

              <div className="bios-card">
                <ScrollReveal direction="scale" delay={0.2} className="bios-card__image">
                  <img src={ceoImg} alt="Agresta Plumbing" />
                </ScrollReveal>
              </div>
            </div>
            <br />
            <h2 className="bios__title">Agresta Core Values</h2>
            <br />
            <div className="bios__core-value-grid">
              <div className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Honesty & Integrity</h3>
                <p className="bios__core-value-card__description">
                Transparent service, No hidden surprises                </p>
              </div>
              <div className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Customer First</h3>
                <p className="bios__core-value-card__description">
                Every job done with care as if it were our own home               </p>
              </div>
              <div className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Quality Craftsmanship</h3>
                <p className="bios__core-value-card__description">
                Attention to detail and long-lasting solutions                </p>
              </div>
              <div className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Education</h3>
                <p className="bios__core-value-card__description">
                Empowering homeowners with knowledge to prevent problems               </p>
              </div>
              <div className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Reliability & Assurance</h3>
                <p className="bios__core-value-card__description">
              Customers can feel secure knowing nothing is left unchecked                </p>
              </div>
            </div>
          </div>
        </section>

         {/* Final CTA Section */}
         <section className="final-cta"
        style={{
          '--finalCtaBg': `url(${finalCtaBg})`
        }}>
          <div className="final-cta__container">
            <h2 className="final-cta__title">Start With Value. Prevent Bigger Problems.</h2>
            <p className="final-cta__description">Book your free plumbing inspection today — a $149 value, yours free!</p>
            <button className="btn btn--primary btn--large">
              Book Free Inspection
            </button>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default About;
