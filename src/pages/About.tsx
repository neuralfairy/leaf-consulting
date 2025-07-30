import React from 'react';
    import { UsersIcon, LightbulbIcon, HandshakeIcon } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import CTALink from '@/components/common/CTALink';
    import { SALESCENTRI_LINKS } from '@/constants/links';

    const teamMembers = [
      {
        name: 'Jane Doe',
        title: 'CEO & Founder',
        image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Jane is a visionary leader with over 20 years of experience in CRM strategy and implementation. Her passion for helping businesses thrive drives our mission.',
      },
      {
        name: 'John Smith',
        title: 'Head of CRM Solutions',
        image: 'https://images.pexels.com/photos/3760068/pexels-photo-3760068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'John leads our team of CRM experts, ensuring every client receives tailored solutions that deliver measurable results. He specializes in Salesforce and HubSpot.',
      },
      {
        name: 'Emily White',
        title: 'Lead Consultant',
        image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Emily is a certified CRM consultant with a knack for optimizing sales workflows and integrating complex systems. Her analytical approach guarantees efficiency.',
      },
      {
        name: 'David Green',
        title: 'Client Success Manager',
        image: 'https://images.pexels.com/photos/3760070/pexels-photo-3760070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'David ensures our clients achieve their CRM goals and maximize their investment. He is dedicated to long-term partnerships and continuous improvement.',
      },
    ];

    const About: React.FC = () => {
      return (
        <div className="container mx-auto py-12 px-6 md:px-10 lg:px-20">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-blue-dark mb-6 leading-tight">
              About <span className="gradient-text">Leaf Consulting Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a dedicated team of CRM experts passionate about transforming sales processes and driving business growth through strategic CRM implementation and optimization.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-blue-dark mb-10">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <LightbulbIcon className="h-12 w-12 text-blue-default mb-4" />
                  <CardTitle className="text-2xl font-semibold text-blue-dark">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We constantly seek cutting-edge solutions and innovative strategies to keep our clients ahead in a dynamic market.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <HandshakeIcon className="h-12 w-12 text-blue-default mb-4" />
                  <CardTitle className="text-2xl font-semibold text-blue-dark">Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe in building strong, collaborative relationships with our clients, working together to achieve shared success.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <UsersIcon className="h-12 w-12 text-blue-default mb-4" />
                  <CardTitle className="text-2xl font-semibold text-blue-dark">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are committed to delivering the highest quality of service, ensuring precision, efficiency, and impactful results in every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-blue-dark mb-10">Meet Our Expert Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-light shadow-md"
                    />
                    <h3 className="text-xl font-semibold text-blue-dark mb-1">{member.name}</h3>
                    <p className="text-blue-default mb-3">{member.title}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <CTALink
                href={SALESCENTRI_LINKS.LEADERSHIP_TEAM}
                external
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                See Our Full Leadership Team
              </CTALink>
            </div>
          </section>

          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-dark mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Founded with a vision to simplify complex CRM challenges, Leaf Consulting Solutions has grown into a trusted partner for businesses seeking to optimize their sales and customer management processes. Our journey is marked by successful implementations, satisfied clients, and a relentless pursuit of excellence.
            </p>
            <CTALink
              href={SALESCENTRI_LINKS.CAREERS}
              external
              variant="outline"
              className="border-blue-default text-blue-default hover:bg-blue-default hover:text-white px-8 py-3 rounded-full transition-all duration-300 text-lg"
            >
              Join Our Team
            </CTALink>
          </section>
        </div>
      );
    };

    export default About;
