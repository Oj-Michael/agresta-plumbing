import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Why should I work with Agresta Plumbing?",
      answer: "Our goal is to serve you! When we first started this business it was in response to having worked in the industry for a long time and wanting to deliver a new level of customer service. You deserve to experience the loyalty, accountability, and speed that lead to a successful customer experience."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Agresta Plumbing is fully licensed, bonded, and insured. We maintain all necessary certifications and insurance coverage to protect both our team and your property. You can trust that we meet all industry standards and regulations."
    },
   
    {
      question: "How often should I have my plumbing system inspected?",
      answer: "We recommend annual plumbing inspections to catch potential issues early and prevent costly repairs. For older homes or systems with known issues, bi-annual inspections may be beneficial. Regular maintenance helps extend the life of your plumbing system."
    },
   
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Hamilton and surrounding areas in Ontario. Our service area includes residential and commercial properties throughout the region. Hamilton, Burlington, Oakville, Mississauga, Paris."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we stand behind our work with comprehensive warranties. All our plumbing repairs and installations come with warranty coverage. We believe in the quality of our craftsmanship and want you to have complete peace of mind."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <div className="faq__header">
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__subtitle">
            Get answers to common questions about our plumbing services
          </p>
        </div>
        
        <div className="faq__accordion">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button 
                className="faq__question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className="faq__answer"
                id={`faq-answer-${index}`}
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? '1' : '0'
                }}
              >
                <div className="faq__answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
