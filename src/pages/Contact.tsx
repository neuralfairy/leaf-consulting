import React from 'react';
    import { MapPinIcon, MailIcon, PhoneIcon, MessageSquareIcon } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Button } from '@/components/ui/button';
    import { Label } from '@/components/ui/label';
    import CTALink from '@/components/common/CTALink';
    import { SALESCENTRI_LINKS } from '@/constants/links';

    const Contact: React.FC = () => {
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert('Form submitted! We will get back to you shortly.');
        // In a real application, you would send this data to a backend
        // and handle email automation.
      };

      return (
        <div className="container mx-auto py-12 px-6 md:px-10 lg:px-20">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-blue-dark mb-6 leading-tight">
              Get in <span className="gradient-text">Touch With Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about CRM implementation or sales process optimization? We're here to help. Reach out to our experts today.
            </p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-blue-dark mb-4">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg">Full Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" required className="mt-2 p-3 border rounded-md w-full" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-lg">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required className="mt-2 p-3 border rounded-md w-full" />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-lg">Company Name</Label>
                    <Input id="company" type="text" placeholder="Acme Corp" className="mt-2 p-3 border rounded-md w-full" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-lg">Your Message</Label>
                    <Textarea id="message" placeholder="Tell us about your CRM needs..." rows={5} required className="mt-2 p-3 border rounded-md w-full" />
                  </div>
                  <Button type="submit" className="gradient-bg text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full text-lg">
                    Submit Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-dark mb-4">Our Office in Raleigh</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="h-6 w-6 text-blue-default shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">
                      123 CRM Avenue, Suite 400 <br />
                      Raleigh, NC 27601 <br />
                      United States
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MailIcon className="h-6 w-6 text-blue-default shrink-0" />
                    <a href="mailto:info@leaf-consulting.com" className="text-lg text-blue-default hover:underline">
                      info@leaf-consulting.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <PhoneIcon className="h-6 w-6 text-blue-default shrink-0" />
                    <a href="tel:+19195551234" className="text-lg text-blue-default hover:underline">
                      +1 (919) 555-1234
                    </a>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-blue-dark mb-3">Quick Contact Options:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <CTALink
                        href={SALESCENTRI_LINKS.SALES_INQUIRY}
                        external
                        variant="outline"
                        className="border-blue-default text-blue-default hover:bg-blue-default hover:text-white"
                      >
                        Request a Quote
                      </CTALink>
                      <CTALink
                        href={SALESCENTRI_LINKS.SUPPORT_REQUEST}
                        external
                        variant="outline"
                        className="border-blue-default text-blue-default hover:bg-blue-default hover:text-white"
                      >
                        Submit a Support Ticket
                      </CTALink>
                      <CTALink
                        href={SALESCENTRI_LINKS.PARTNER_INQUIRY}
                        external
                        variant="outline"
                        className="border-blue-default text-blue-default hover:bg-blue-default hover:text-white"
                      >
                        Partner Inquiry
                      </CTALink>
                      <CTALink
                        href={SALESCENTRI_LINKS.CALENDLY_BOOKING}
                        external
                        variant="outline"
                        className="border-blue-default text-blue-default hover:bg-blue-default hover:text-white"
                      >
                        Schedule a Call
                      </CTALink>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-dark mb-4">Live Chat Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <MessageSquareIcon className="h-16 w-16 text-blue-default mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-6">
                    Need immediate assistance? Our live chat is available during business hours.
                  </p>
                  <CTALink
                    href={SALESCENTRI_LINKS.LIVE_CHAT}
                    external
                    className="gradient-bg text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Start Live Chat
                  </CTALink>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Map Placeholder */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-blue-dark mb-10">Find Us on the Map</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.8000000000005!2d-78.6381789846959!3d35.77958978019999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f6d6d6d6d6d%3A0x1a1a1a1a1a1a1a1a!2sRaleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raleigh Office Location"
              ></iframe>
            </div>
          </section>
        </div>
      );
    };

    export default Contact;
