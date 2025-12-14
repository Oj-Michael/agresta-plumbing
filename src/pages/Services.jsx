import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import serv1 from '../assets/images/serv-1.webp';
import serv2 from '../assets/images/serv-2.webp';
import serv3 from '../assets/images/serv-3.webp';
import budget from '../assets/images/boiler-services.jpg'
import FAQ from '../components/sections/FAQ';
import ScrollReveal from '../components/animations/ScrollReveal';


const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const reviews = [
    {
      name: "Sarah M., Pieter",
      text: "The   caught a small leak we couldn’t see. Saved us thousands.",
    },
    {
      name: "Thomas Montgomery", 
      text: "They showed up when they said they would and completed the job efficiently.",
    },
    {
      name: "Michael Hartman",
      text: "Very nice repair man. Chesso was very personable and professional.",
    },
    {
      name: "Carole Feingold",
      text: "Service was timely and efficiently completed. Highly recommended!",
    },
    {
      name: "Sarah Johnson",
      text: "Excellent plumbing service! Francesco was thorough and explained everything clearly.",
    },
    {
      name: "Mike Wilson",
      text: "Quick response time and fair pricing. Will definitely use again!",
    }
  ];

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Create extended reviews array for infinite loop
  const extendedReviews = [
    ...reviews.slice(-visibleCards), // Clone last cards at beginning
    ...reviews,                      // Original reviews
    ...reviews.slice(0, visibleCards) // Clone first cards at end
  ];

  const totalSlides = Math.ceil(reviews.length / visibleCards);
  
  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentSlide >= totalSlides + 1) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    } else if (currentSlide <= 0) {
      setIsTransitioning(false);
      setCurrentSlide(totalSlides);
    }
  };

  // Start at slide 1 (first real slide after cloned ones)
  useEffect(() => {
    setCurrentSlide(1);
  }, [visibleCards]);

  return (
    <>
      <Helmet>
        <title>Plumbing Services | Complete Plumbing Solutions</title>
        <meta name="description" content="Complete plumbing services including emergency repairs, water heater installation, drain cleaning, leak detection, and more. Licensed professional plumbers." />
        <meta name="keywords" content="plumbing services, emergency repairs, water heater, drain cleaning, leak detection, sewer repair" />
        <link rel="canonical" href="/services" />
      </Helmet>
      
      <div className="services-page">
      <section className="services">
          <div className="services__container">
            <div className="services__header">
            <ScrollReveal direction="up" delay={0.1}>
            <h2>What We Offer</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p>
                From emergency repairs to complete installations and renovations, we provide comprehensive plumbing solutions for your home and business.
              </p>
            </ScrollReveal>
            </div>
            <div className="services__grid">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="service-card">
                <div className="service-card__image">
                  <img src={serv2} alt="Plumbing Services" />
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">Plumbing Services</h3>
                  <p className="service-card__description">
                    We install everything from new faucets to complete plumbing systems for your every needs.
                  </p>
                  <a href="/plumbing-services" className="service-card__link">Learn More</a>
                </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div  className="service-card">
                <div className="service-card__image">
                  <img src={serv3} alt="Plumbing Renovations" />
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">Plumbing Renovations</h3>
                  <p className="service-card__description">
                    We renovate your plumbing systems to make them more efficient and reliable using the best technologies.
                  </p>
                  <a href="/renovation" className="service-card__link">Learn More</a>
                </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
      </section>

      <section className="budget">
        <div className="budget__container">
          <div className="budget__grid">
            <ScrollReveal direction="left" delay={0.1} className="grid-item">
              <h2 className="grid-item__title">Services That Provide FInancial Reflief</h2>

              <p className="grid-item__description">
              There's no denying the stress that comes with HVAC and plumbing problems, especially when they are unexpected. It's important to us that you get the services you need. Take advantage of our special offers, designed to help you stick to your budget. Whether it's signing up for a preventative maintenance package, or checking out financing or discount options, we aim to make essential home services more affordable for you.
              </p>
              <button className="btn btn--primary">
                Get In Touch
              </button>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.2} className="grid-item__image">
              <img src={budget} alt="Agresta Boiler Services" />
            </ScrollReveal>
          </div>
        </div>
      </section>

         {/* Reviews */}
         {/* <section className="reviews">
          <div className="reviews__container">
            <h2 className="reviews__title">What Our Satisfied Customers Have To Say</h2>
            
            <div className="reviews__carousel">
              <div 
                className="reviews__track" 
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
                  transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedReviews.map((review, index) => (
                  <div key={index} className="reviews__card">
                    <div className="reviews__stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                    <p className="reviews__text">
                      {review.text}
                    </p>
                    <div className="reviews__author">
                      <div className="reviews__avatar">
                        {review.name.charAt(0)}
                      </div>
                      <div className="reviews__name">
                        {review.name}
                        <span className="verified">✓</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="reviews__navigation">
                <button 
                  className="reviews__nav-btn" 
                  onClick={prevSlide}
                >
                  ‹
                </button>
                <button 
                  className="reviews__nav-btn" 
                  onClick={nextSlide}
                >
                  ›
                </button>
              </div>
              
              <div className="reviews__dots">
                {[...Array(totalSlides)].map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index === currentSlide - 1 ? 'active' : ''}`}
                    onClick={() => {
                      setIsTransitioning(true);
                      setCurrentSlide(index + 1);
                    }}
                  />
                ))}
              </div>
            </div>
            <br />
            <div className="cta-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn--primary">
                Get In Touch Now
              </button>
            </div>
          </div>
        </section> */}
  {/* Connect Wit Us */}
  <section className="how-it-works">
          <div className="how-it-works__container">
            <h2 className="how-it-works__title">Connect Wit Us</h2>
            <div className="how-it-works__grid">
            <ScrollReveal direction="up" delay={0.1} className="how-it-works__card">
              <span className="how-it-works__card__number">01</span>
              <h3 className="how-it-works__card__title">Connect With Us</h3>
              <p className="how-it-works__card__description">Reach out to us for a   or request a service.</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="how-it-works__card">
              <span className="how-it-works__card__number">02</span>
              <h3 className="how-it-works__card__title">Site Inspection</h3>
              <p className="how-it-works__card__description">We'll inspect your fixture and provide you with a detailed report.</p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3} className="how-it-works__card">
              <span className="how-it-works__card__number">03</span>
              <h3 className="how-it-works__card__title">Schedule the Work</h3>
              <p className="how-it-works__card__description">We'll schedule the work, approve estimate and pick a time.</p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4} className="how-it-works__card">
              <span className="how-it-works__card__number">04</span>
              <h3 className="how-it-works__card__title">Peace of Mind</h3>
              <p className="how-it-works__card__description">Quality work, warranty and no hidden surprises.</p>
            </ScrollReveal>
          </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

      </div>
    </>
  );
};

export default Services;
