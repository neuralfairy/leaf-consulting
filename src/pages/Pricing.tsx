import React from 'react';
    import { CheckIcon } from 'lucide-react';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import CTALink from '@/components/common/CTALink';
    import { SALESCENTRI_LINKS } from '@/constants/links';

    const pricingPlans = [
      {
        name: 'Starter',
        price: '$49',
        period: '/month',
        description: 'Ideal for small businesses beginning their CRM journey.',
        features: [
          'Basic CRM setup',
          'Lead & contact management',
          'Standard reporting',
          'Email integration',
          'Up to 5 users',
        ],
        cta: 'Start Free Trial',
        ctaLink: SALESCENTRI_LINKS.FREE_TRIAL,
      },
      {
        name: 'Professional',
        price: '$149',
        period: '/month',
        description: 'Perfect for growing teams needing advanced sales automation.',
        features: [
          'Everything in Starter',
          'Advanced sales pipeline',
          'Workflow automation',
          'Customizable dashboards',
          'Priority support',
          'Up to 20 users',
        ],
        cta: 'Book a Demo',
        ctaLink: SALESCENTRI_LINKS.BOOK_DEMO,
        highlight: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored solutions for large organizations with complex needs.',
        features: [
          'Everything in Professional',
          'Full system integration',
          'Dedicated account manager',
          'Advanced security & compliance',
          'Unlimited users',
          'On-site training',
        ],
        cta: 'Contact Sales',
        ctaLink: SALESCENTRI_LINKS.ENTERPRISE_CUSTOM,
      },
    ];

    const Pricing: React.FC = () => {
      return (
        <div className="container mx-auto py-12 px-6 md:px-10 lg:px-20">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-blue-dark mb-6 leading-tight">
              Transparent <span className="gradient-text">Pricing Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect CRM implementation plan that fits your business size and growth ambitions. No hidden fees, just clear value.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  plan.highlight ? 'border-2 border-blue-default scale-105' : ''
                }`}
              >
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-bold text-blue-dark mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-5xl font-extrabold text-blue-dark">{plan.price}</span>
                    <span className="text-xl text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <CheckIcon className="h-5 w-5 text-blue-default mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <CTALink
                    href={plan.ctaLink}
                    external
                    className={`w-full text-lg font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                      plan.highlight
                        ? 'gradient-bg text-primary-foreground'
                        : 'border border-blue-default text-blue-default hover:bg-blue-default hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </CTALink>
                </CardFooter>
              </Card>
            ))}
          </section>

          <section className="text-center">
            <h2 className="text-4xl font-bold text-blue-dark mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              For large enterprises or unique requirements, we offer bespoke CRM implementation and optimization services.
            </p>
            <CTALink
              href={SALESCENTRI_LINKS.ENTERPRISE_CUSTOM}
              external
              className="gradient-bg text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Request a Custom Quote
            </CTALink>
          </section>
        </div>
      );
    };

    export default Pricing;
