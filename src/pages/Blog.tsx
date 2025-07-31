import React from 'react';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import CTALink from '@/components/common/CTALink';
    import { SALESCENTRI_LINKS } from '@/constants/links';

    const blogPosts = [
      {
        id: '1',
        slug: 'crm-implementation-best-practices',
        title: 'CRM Implementation: Best Practices for Success',
        date: 'October 26, 2023',
        excerpt: 'Discover the essential steps and strategies to ensure a smooth and successful CRM implementation in your business.',
        image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: '2',
        slug: 'roi-of-crm-optimization',
        title: 'Maximizing ROI: The Power of CRM Optimization',
        date: 'October 20, 2023',
        excerpt: 'Learn how continuous CRM optimization can significantly boost your return on investment and drive sales efficiency.',
        image: 'https://images.pexels.com/photos/3760068/pexels-photo-3760068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: '3',
        slug: 'integrating-crm-with-sales-tools',
        title: 'Seamless Sales: Integrating CRM with Your Favorite Tools',
        date: 'October 15, 2023',
        excerpt: 'Explore the benefits and strategies for integrating your CRM system with other essential sales and marketing tools.',
        image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: '4',
        slug: 'choosing-the-right-crm',
        title: 'How to Choose the Right CRM for Your B2B Business',
        date: 'October 10, 2023',
        excerpt: 'A comprehensive guide to selecting the perfect CRM solution that aligns with your business needs and growth objectives.',
        image: 'https://images.pexels.com/photos/3760070/pexels-photo-3760070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: '5',
        slug: 'future-of-crm-ai',
        title: 'The Future of CRM: AI and Automation',
        date: 'October 5, 2023',
        excerpt: 'Dive into how artificial intelligence and automation are reshaping the CRM landscape and what it means for your business.',
        image: 'https://images.pexels.com/photos/3760071/pexels-photo-3760071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ];

    const Blog: React.FC = () => {
      return (
        <div className="container mx-auto py-12 px-6 md:px-10 lg:px-20">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-blue-dark mb-6 leading-tight">
              Our <span className="gradient-text">Insights & Thought Leadership</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and expert advice on CRM implementation, sales process optimization, and B2B sales tools.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-blue-dark">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Link to={`${SALESCENTRI_LINKS.CASE_STUDIES}`} className="text-blue-default hover:underline font-medium">
                    Read More &rarr;
                  </Link>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-dark mb-6">Resource Library</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Access our exclusive collection of whitepapers, guides, and tutorials to deepen your understanding of CRM and sales excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTALink
                href={SALESCENTRI_LINKS.WHITEPAPERS}
                external
                variant="outline"
                className="border-blue-default text-blue-default hover:bg-blue-default hover:text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Download Whitepapers
              </CTALink>
              <CTALink
                href={SALESCENTRI_LINKS.TUTORIALS}
                external
                variant="outline"
                className="border-blue-default text-blue-default hover:bg-blue-default hover:text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Watch Tutorials
              </CTALink>
            </div>
          </section>
        </div>
      );
    };

    export default Blog;
