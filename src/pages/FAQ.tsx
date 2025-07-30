import React from 'react';
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from '@/components/ui/accordion';
    import CTALink from '@/components/common/CTALink';
    import { SALESCENTRI_LINKS } from '@/constants/links';

    const faqData = [
      {
        question: 'What is CRM implementation?',
        answer:
          'CRM implementation is the process of integrating a Customer Relationship Management (CRM) system into your business operations. This involves planning, data migration, customization, user training, and ongoing support to ensure the system effectively manages customer interactions and sales processes.',
      },
      {
        question: 'How long does CRM implementation take?',
        answer:
          'The duration of CRM implementation varies depending on the complexity of your business, the size of your data, the level of customization required, and the specific CRM platform chosen. Simple implementations might take a few weeks, while complex enterprise solutions can take several months.',
      },
      {
        question: 'What are the benefits of a well-implemented CRM?',
        answer:
          'A well-implemented CRM can lead to improved sales efficiency, better customer retention, streamlined marketing efforts, enhanced data insights, automated workflows, and a unified view of customer interactions across your organization.',
      },
      {
        question: 'Do you provide training for CRM users?',
        answer:
          'Yes, comprehensive user training is a critical part of our CRM implementation process. We ensure your team is fully equipped to utilize the new system effectively, offering tailored training sessions and ongoing support.',
      },
      {
        question: 'Can you integrate our CRM with other business tools?',
        answer:
          'Absolutely. We specialize in system integration, ensuring your CRM seamlessly connects with your existing sales, marketing, customer service, and ERP tools to create a unified and efficient ecosystem.',
      },
      {
        question: 'What kind of ongoing support do you offer?',
        answer:
          'Our support extends beyond initial implementation. We offer ongoing technical support, system optimization, performance monitoring, and strategic consulting to ensure your CRM continues to meet your evolving business needs.',
      },
      {
        question: 'How do you ensure data security and GDPR compliance?',
        answer:
          'Data security and compliance are paramount. We adhere to industry best practices for data handling and ensure that all CRM implementations are designed with robust security features and align with relevant regulations like GDPR.',
      },
      {
        question: 'What is the typical ROI for CRM implementation?',
        answer:
          'The ROI for CRM implementation can be significant, often seen in increased sales, improved customer satisfaction, reduced operational costs, and better decision-making. We can help you calculate potential ROI based on your specific business metrics.',
      },
    ];

    const FAQ: React.FC = () => {
      return (
        <div className="container mx-auto py-12 px-6 md:px-10 lg:px-20">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-blue-dark mb-6 leading-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about CRM implementation, sales process optimization, and our services.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg font-semibold text-blue-default hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="text-center">
            <h2 className="text-4xl font-bold text-blue-dark mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              If you couldn't find the answer you were looking for, feel free to reach out to our team directly.
            </p>
            <CTALink
              href={SALESCENTRI_LINKS.CONTACT}
              external
              className="gradient-bg text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Contact Our Experts
            </CTALink>
          </section>
        </div>
      );
    };

    export default FAQ;
