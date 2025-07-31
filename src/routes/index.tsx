import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import Home from '@/pages/Home';
    import Features from '@/pages/Features';
    import Pricing from '@/pages/Pricing';
    import About from '@/pages/About';
    import Contact from '@/pages/Contact';
    import Blog from '@/pages/Blog';
    import BlogPost from '@/pages/BlogPost';
    import FAQ from '@/pages/FAQ';
    import { LOCAL_LINKS } from '@/constants/links';

    const AppRoutes: React.FC = () => {
      return (
        <Router>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path={LOCAL_LINKS.HOME} element={<Home />} />
              <Route path={LOCAL_LINKS.FEATURES} element={<Features />} />
              <Route path={LOCAL_LINKS.PRICING} element={<Pricing />} />
              <Route path={LOCAL_LINKS.ABOUT} element={<About />} />
              <Route path={LOCAL_LINKS.CONTACT} element={<Contact />} />
              <Route path={LOCAL_LINKS.BLOG} element={<Blog />} />
              <Route path={LOCAL_LINKS.BLOG_POST} element={<BlogPost />} />
              <Route path={LOCAL_LINKS.FAQ} element={<FAQ />} />
              {/* Add routes for Privacy Policy and Terms of Service if separate pages are needed */}
              <Route path={LOCAL_LINKS.PRIVACY_POLICY} element={<div className="container mx-auto py-12 px-6 md:px-10 lg:px-20"><h1 className="text-4xl font-bold text-blue-dark mb-6">Privacy Policy</h1><p className="text-muted-foreground">Content for Privacy Policy goes here.</p></div>} />
              <Route path={LOCAL_LINKS.TERMS_OF_SERVICE} element={<div className="container mx-auto py-12 px-6 md:px-10 lg:px-20"><h1 className="text-4xl font-bold text-blue-dark mb-6">Terms of Service</h1><p className="text-muted-foreground">Content for Terms of Service goes here.</p></div>} />
            </Routes>
          </main>
          <Footer />
        </Router>
      );
    };

    export default AppRoutes;
