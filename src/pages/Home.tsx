import React from 'react';
    import { ArrowRightIcon, CheckCircle2Icon, StarIcon, ShieldIcon, AwardIcon, BarChart2Icon } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Button } from '@/components/ui/button';
    import CTALink from '@/components/common/CTALink';
    import { SALESCENTRI_LINKS } from '@/constants/links';

    const testimonials = [
      {
        quote: "Leaf Consulting transformed our sales process. Their CRM implementation was seamless, and we saw a 30% increase in lead conversion within months!",
        author: "Sarah Chen",
        title: "CEO, Tech Solutions Inc.",
        avatar: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        quote: "The expertise and support from Leaf Consulting were unparalleled. Our team adopted the new CRM quickly, leading to significant efficiency gains.",
        author: "Michael Lee",
        title: "Sales Director, Global Innovations",
        avatar: "https://images.pexels.com/photos/3760068/pexels-photo-3760068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        quote: "Their tailored approach to CRM optimization helped us unlock new levels of productivity. Highly recommend Leaf Consulting for any B2B business.",
        author: "Jessica Kim",
        title: "Operations Manager, Apex Systems",
        avatar: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        quote: "From initial consultation to post-implementation support, Leaf Consulting exceeded our expectations. A true partner in growth.",
        author: "David Brown",
        title: "Founder, Enterprise Connect",
        avatar: "https://images.pexels.com/photos/3760070/pexels-photo-3760070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ];

    const features = [
      {
        title: "Streamlined Sales Processes",
        description: "Automate tasks, manage leads, and track opportunities with unparalleled efficiency.",
        icon: CheckCircle2Icon,
      },
      {
        title: "Enhanced Customer Relationships",
        description: "Gain a 360-degree view of your customers for personalized interactions and improved retention.",
        icon: StarIcon,
      },
      {
        title: "Data-Driven Insights",
        description: "Leverage powerful analytics to make informed decisions and optimize your sales strategy.",
        icon: BarChart2Icon,
      },
    ];

    const Home: React.FC = () => {
      const [revenue, setRevenue] = React.useState(1000000);
      const [conversionRate, setConversionRate] = React.useState(5);
      const [dealSize, setDealSize] = React.useState(10000);

      const calculateROI = () => {
        const improvedConversionRate = conversionRate + 2; // Example: 2% increase
        const newRevenue = (revenue / conversionRate) * improvedConversionRate;
        const roi = newRevenue - revenue;
        return roi.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      };

      const handleFreeTrialSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Free trial signup initiated!');
        // In a real app, you'd send this to a lead capture system
      };

      return (
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center px-6 md:px-10 lg:px-20 gradient-bg text-white overflow-hidden shadow-2xl hero-section-bg">
            <div className="absolute inset-0 opacity-20">
              {/* Background pattern or subtle animation */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up animation-delay-100">
                Transform Your Sales with Expert <br className="hidden md:block" />
                <span className="hero-title-shine drop-shadow-lg">CRM Implementation</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
                We help B2B businesses optimize their sales processes, integrate systems, and drive measurable growth through tailored CRM solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-500">
                <CTALink
                  href={SALESCENTRI_LINKS.BOOK_DEMO}
                  external
                  className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-subtle animate-float"
                >
                  Book a Free Demo <ArrowRightIcon className="ml-2 h-5 w-5" />
                </CTALink>
                <CTALink
                  href={SALESCENTRI_LINKS.FREE_TRIAL_SIGNUP}
                  external
                  variant="outline"
                  className="border-2 border-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-default transition-all duration-300 hover:scale-105 animate-float"
                >
                  Start Free Trial
                </CTALink>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-6 md:px-10 lg:px-20 bg-background">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-blue-dark mb-12 animate-fade-in animation-delay-100">Why Choose Leaf Consulting?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className={`group p-6 shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 animate-scale-in animation-delay-${(index + 2) * 100}`}>
                    <CardHeader className="flex flex-col items-center">
                      <feature.icon className="h-12 w-12 text-blue-default mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <CardTitle className="text-2xl font-semibold text-blue-dark">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ROI Calculator Section */}
          <section className="py-16 px-6 md:px-10 lg:px-20 bg-blue-light text-white">
            <div className="container mx-auto text-center max-w-3xl">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in animation-delay-100">Calculate Your Potential ROI</h2>
              <p className="text-lg opacity-90 mb-8 animate-fade-in animation-delay-200">
                See how much your business can save and earn with optimized CRM implementation.
              </p>
              <Card className="p-8 bg-white text-foreground shadow-xl animate-scale-in animation-delay-300">
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="revenue" className="text-lg font-medium">Current Annual Revenue ($)</Label>
                    <Input
                      id="revenue"
                      type="number"
                      value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="mt-2 p-3 border rounded-md w-full text-lg focus:ring-4 focus:ring-blue-default/50 focus:border-blue-default transition-all"
                    />
                  </div>
                  <div>
                    <Label htmlFor="conversionRate" className="text-lg font-medium">Current Lead-to-Customer Conversion Rate (%)</Label>
                    <Input
                      id="conversionRate"
                      type="number"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="mt-2 p-3 border rounded-md w-full text-lg focus:ring-4 focus:ring-blue-default/50 focus:border-blue-default transition-all"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dealSize" className="text-lg font-medium">Average Deal Size ($)</Label>
                    <Input
                      id="dealSize"
                      type="number"
                      value={dealSize}
                      onChange={(e) => setDealSize(Number(e.target.value))}
                      className="mt-2 p-3 border rounded-md w-full text-lg focus:ring-4 focus:ring-blue-default/50 focus:border-blue-default transition-all"
                    />
                  </div>
                  <div className="text-center mt-8">
                    <h3 className="text-2xl font-bold text-blue-dark">
                      Potential Annual ROI Increase: <span className="text-green-600">{calculateROI()}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      *Based on an estimated 2% increase in conversion rate with our CRM optimization.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 px-6 md:px-10 lg:px-20 bg-background">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-blue-dark mb-12 animate-fade-in animation-delay-100">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className={`group p-6 shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} animation-delay-${(index + 2) * 100}`}>
                    <CardContent className="flex flex-col items-center text-center">
                      <div className="relative w-24 h-24 mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full rounded-full object-cover border-4 border-blue-light shadow-md transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-blue-default"
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-blue-default opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-lg italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold text-blue-dark">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <CTALink
                href={SALESCENTRI_LINKS.CASE_STUDIES}
                external
                variant="outline"
                className="mt-12 border-blue-default text-blue-default hover:bg-blue-default hover:text-white px-8 py-3 rounded-full transition-all duration-300 text-lg animate-fade-in animation-delay-800"
              >
                Read More Case Studies
              </CTALink>
            </div>
          </section>

          {/* Trust Badges / Certifications */}
          <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-50">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-blue-dark mb-10 animate-fade-in animation-delay-100">Trusted by Industry Leaders</h2>
              <div className="flex flex-wrap justify-center items-center gap-12">
                <ShieldIcon className="h-20 w-20 text-blue-default opacity-70 hover:opacity-100 hover:scale-110 hover:text-blue-dark hover:drop-shadow-lg transition-all duration-300 animate-scale-in animation-delay-200" />
                <AwardIcon className="h-20 w-20 text-blue-default opacity-70 hover:opacity-100 hover:scale-110 hover:text-blue-dark hover:drop-shadow-lg transition-all duration-300 animate-scale-in animation-delay-300" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" alt="Salesforce Partner" className="h-16 grayscale hover:grayscale-0 hover:scale-110 hover:drop-shadow-lg transition-all duration-300 animate-scale-in animation-delay-400" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/HubSpot_Logo.svg/2560px-HubSpot.com_logo.svg.png" alt="HubSpot Certified" className="h-16 grayscale hover:grayscale-0 hover:scale-110 hover:drop-shadow-lg transition-all duration-300 animate-scale-in animation-delay-500" />
                <img src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="ISO Certified" className="h-16 grayscale hover:grayscale-0 hover:scale-110 hover:drop-shadow-lg transition-all duration-300 animate-scale-in animation-delay-600" />
              </div>
              <CTALink
                href={SALESCENTRI_LINKS.CERTIFICATIONS}
                external
                variant="link"
                className="mt-8 text-blue-default hover:text-blue-dark animate-fade-in animation-delay-700"
              >
                View All Certifications & Compliance
              </CTALink>
            </div>
          </section>

          {/* Call to Action - Bottom */}
          <section className="py-16 px-6 md:px-10 lg:px-20 text-center gradient-bg text-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up animation-delay-100">Ready to Optimize Your Sales Process?</h2>
              <p className="text-lg opacity-90 mb-8 animate-fade-in-up animation-delay-300">
                Start your journey towards a more efficient and profitable sales operation today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-500">
                <CTALink
                  href={SALESCENTRI_LINKS.BOOK_DEMO}
                  external
                  className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-subtle animate-float"
                >
                  Book Your Free Demo
                </CTALink>
                <CTALink
                  href={SALESCENTRI_LINKS.CONTACT}
                  external
                  variant="outline"
                  className="border-2 border-silver-default text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-silver-default hover:text-black transition-all duration-300 hover:scale-105 animate-float"
                >
                  Contact Sales
                </CTALink>
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default Home;
