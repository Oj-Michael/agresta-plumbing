import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import heroBg from '../assets/images/plumbers-johannesburg.jpg';
import finalCtaBg from '../assets/images/plumbero-img16-1.webp';
import serv1 from '../assets/images/serv-1.webp';
import serv2 from '../assets/images/serv-2.webp';
import serv3 from '../assets/images/serv-3.webp';
import ceoImg from '../assets/images/agresta-ceo.webp';
import FAQ from '../components/sections/FAQ';
import ScrollReveal from '../components/animations/ScrollReveal';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const reviews = [
    {
      name: "Sarah M., Pieter",
      text: "The free inspection caught a small leak we couldn’t see. Saved us thousands.",
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
        <title>Agresta Plumbing - Leak Free | Worry Free</title>
        <meta name="description" content="Agresta Plumbing is a professional plumbing services for residential and commercial needs. Available 24/7 for emergency repairs. Licensed, bonded, and insured plumbers." />
        <meta name="keywords" content="plumbing, plumber, emergency plumbing, water heater, drain cleaning, leak detection, Agresta Plumbing" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="home">
        <section 
          className="hero"
          style={{
            '--hero-bg': `url(${heroBg})`
          }}
        >
          <div className="hero__container">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="hero__company">
              Hamilton's Trusted Plumbing Team
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="hero__title">
              Start with a Free 1-Fixture Inspection — <span style={{color: "#188bf67"}}>$149 Value, Yours Free</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="hero__subtitle">
                Licensed, bonded, and insured plumbers available 24/7 for all your residential and commercial plumbing needs.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <div className="hero__cta">
                <button className="btn btn--primary btn--large">
                  Claim Free Inspection
                </button>
                <button className="btn btn--secondary btn--large">
                  (905) 902-0121
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="free-inspection">
          <div className="free-inspection__container">
              <h2 className="free-inspection__title">Free 1-Fixture Plumbing Health Check (First-Time Customers Only)
              </h2>
              <div className="free-inspection__grid">
                <ScrollReveal direction="right" delay={0.1} className="free-inspection-card">
                  <h3 className="card-title">🔍 Leak Detection</h3>
                  <span className="card-price">$ 49</span>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.2} className="free-inspection-card">
                  <h3 className="card-title">🛠 Fixture Condition Review</h3>
                  <span className="card-price">$ 29</span>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.3} className="free-inspection-card">
                  <h3 className="card-title">🚿 Water Pressure Test</h3>
                  <span className="card-price">$ 39</span>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.4} className="free-inspection-card">
                  <h3 className="card-title">📋 Written Report</h3>
                  <span className="card-price">$ 32</span>
                </ScrollReveal>
                
              </div>
          </div>
        </section>

        <section className="services">
          <div className="services__container">
            <div className="services__header">
              <h2>Agresta Plumbing Services & Renovations</h2>
              <p>
                From emergency repairs to complete installations and renovations, we provide comprehensive plumbing solutions for your home and business.
              </p>
              <a className="btn btn--accent" style={{ marginTop: '2rem', }} href='/services'>
                Read More
              </a>
            </div>
            <div className="services__grid">
              <ScrollReveal direction="scale" delay={0.1} className="service-card">
                <div className="service-card__image">
                  <img src={serv1} alt="Plunbing Repair" />
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">Plumbing Repairs</h3>
                  <p className="service-card__description">
                    We fix everything from sinks to sewer lines, using the best for effective solutions.
                  </p>
                  <a href="/services" className="service-card__link">Learn More</a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={0.2} className="service-card">
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
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={0.3} className="service-card">
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
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* About Us and Mission Statement */}
        <section className="bios">
          <div className="bios__container">

          <h2 className="bios__title">Agresta Plumbing Mission Statement</h2>
            <p className="bios__description">
              At Agresta Plumbing, our mission is to deliver the highest standard of plumbing service in Southern Ontario protecting homes, preventing costly problems, and building lasting trust with every homeowner we serve. Francesco’s vision is to make Agresta Plumbing a household name by combining modern service, integrity, and education  giving customers not only solutions, but the knowledge to protect their homes with confidence.
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
              <ScrollReveal direction="up" delay={0.1} className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Honesty & Integrity</h3>
                <p className="bios__core-value-card__description">
                Transparent service, No hidden surprises                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2} className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Customer First</h3>
                <p className="bios__core-value-card__description">
                Every job done with care as if it were our own home               </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3} className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Quality Craftsmanship</h3>
                <p className="bios__core-value-card__description">
                Attention to detail and long-lasting solutions                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.4} className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Education</h3>
                <p className="bios__core-value-card__description">
                Empowering homeowners with knowledge to prevent problems               </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.5} className="bios__core-value-card">
                <h3 className="bios__core-value-card__title">Reliability & Assurance</h3>
                <p className="bios__core-value-card__description">
              Customers can feel secure knowing nothing is left unchecked                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews">
          <div className="reviews__container">
            <h2 className="reviews__title">What Homeowners Are Saying</h2>
            
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
            <button className="btn btn--primary btn--large">
                Claim Free Inspection
              </button>
            </div>
          </div>
        </section>
        
        {/* Working with us is simple */}
        <section className="how-it-works">
          <div className="how-it-works__container">
            <h2 className="how-it-works__title">Working With Us Is Simple</h2>
            <div className="how-it-works__grid">
            <ScrollReveal direction="up" delay={0.1} className="how-it-works__card">
              <span className="how-it-works__card__number">01</span>
              <h3 className="how-it-works__card__title">Connect With Us</h3>
              <p className="how-it-works__card__description">Reach out to us for a free inspection or request a service.</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="how-it-works__card">
              <span className="how-it-works__card__number">02</span>
              <h3 className="how-it-works__card__title">Free Fixture Inspection</h3>
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
        
        {/* Final CTA Section */}
        <section className="final-cta"
        style={{
          '--finalCtaBg': `url(${finalCtaBg})`
        }}>
          <div className="final-cta__container">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="final-cta__title anim-text">Start With Value. Prevent Bigger Problems.</h2>
          </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="final-cta__description">Book your free plumbing inspection today — a $149 value, yours free!</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <button className="btn btn--primary btn--large">
                Book Free Inspection
              </button>
            </ScrollReveal>
          </div>
        </section>
      </div>  
    </>
  );
};

export default Home;
