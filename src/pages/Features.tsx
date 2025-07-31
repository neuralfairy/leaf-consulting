import React from 'react';
    import {
      CheckCircle2Icon,
      SettingsIcon,
      DatabaseIcon,
      UsersIcon,
      BarChart2Icon,
      ZapIcon,
      ShieldCheckIcon,
      LightbulbIcon,
    } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import CTALink from '@/components/common/CTALink';
    import { SALESCENTRI_LINKS } from '@/constants/links';

    const features = [
      {
        icon: SettingsIcon,
        title: 'Custom CRM Configuration',
        description: 'Tailored setup of your CRM system to perfectly align with your unique business processes and goals.',
      },
      {
        icon: DatabaseIcon,
        title: 'Seamless Data Migration',
        description: 'Secure and accurate transfer of your existing customer data into the new CRM, ensuring data integrity.',
      },
      {
        icon: UsersIcon,
        title: 'User Adoption & Training',
        description: 'Comprehensive training programs and ongoing support to ensure your team maximizes the CRM’s potential.',
      },
      {
        icon: BarChart2Icon,
        title: 'Advanced Analytics & Reporting',
        description: 'Custom dashboards and reports to provide actionable insights into sales performance and customer behavior.',
      },
      {
        icon: ZapIcon,
        title: 'Workflow Automation',
        description: 'Automate repetitive tasks and streamline sales, marketing, and service workflows for increased efficiency.',
      },
      {
        icon: ShieldCheckIcon,
        title: 'Security & Compliance',
        description: 'Implement robust security measures and ensure your CRM adheres to industry standards and data privacy regulations.',
      },
    ];

    const integrations = [
      { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png' },
      { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png' },
      { name: 'Microsoft Dynamics 365', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Microsoft_Dynamics_365_Logo.svg/2560px-Microsoft_Dynamics_365_Logo.svg.png' },
      { name: 'Zoho CRM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Zoho_Logo.svg/2560px-Zoho_Logo.svg.png' },
      { name: 'Pipedrive', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pipedrive_logo.svg/2560px-Pipedrive_logo.svg.png' },
      { name: 'SAP CRM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png' },
    ];

    const Features: React.FC = () => {
      return (
        <div className="container mx-auto py-12 px-6 md:px-10 lg:px-20">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-blue-dark mb-6 leading-tight">
              Our CRM Implementation <span className="gradient-text">Capabilities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive suite of services designed to ensure your CRM system drives maximum value for your business.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <feature.icon className="h-12 w-12 text-blue-default mb-4" />
                  <CardTitle className="text-2xl font-semibold text-blue-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-dark mb-10">Interactive Demo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the power of a perfectly implemented CRM. Explore our interactive demo to see how our solutions can transform your sales process.
            </p>
            <CTALink
              href={SALESCENTRI_LINKS.INTERACTIVE_DEMO}
              external
              className="gradient-bg text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Launch Interactive Demo
            </CTALink>
          </section>

          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-dark mb-10">Seamless Integrations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Our CRM solutions integrate effortlessly with your existing sales, marketing, and business tools, creating a unified and efficient ecosystem.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
              {integrations.map((integration, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <img
                    src={integration.logo}
                    alt={`${integration.name} Logo`}
                    className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="text-sm font-medium text-muted-foreground">{integration.name}</span>
                </div>
              ))}
            </div>
            <CTALink
              href={SALESCENTRI_LINKS.INTEGRATION_REQUESTS}
              external
              variant="outline"
              className="border-blue-default text-blue-default hover:bg-blue-default hover:text-white px-8 py-3 rounded-full transition-all duration-300 text-lg"
            >
              View All Integrations
            </CTALink>
          </section>

          <section className="text-center">
            <h2 className="text-4xl font-bold text-blue-dark mb-6">Ready to Transform Your Sales?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with our experts to discuss your specific CRM implementation needs and get a tailored solution.
            </p>
            <CTALink
              href={SALESCENTRI_LINKS.BOOK_DEMO}
              external
              className="gradient-bg text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Book a Free Demo
            </CTALink>
          </section>
        </div>
      );
    };

    export default Features;
