import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import { MenuIcon, LeafIcon } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
    import { LOCAL_LINKS, SALESCENTRI_LINKS } from '@/constants/links';
    import CTALink from '@/components/common/CTALink';

    const navLinks = [
      { name: 'Home', href: LOCAL_LINKS.HOME },
      { name: 'Features', href: LOCAL_LINKS.FEATURES },
      { name: 'Pricing', href: LOCAL_LINKS.PRICING },
      { name: 'About', href: LOCAL_LINKS.ABOUT },
      { name: 'Contact', href: LOCAL_LINKS.CONTACT },
      { name: 'Blog', href: LOCAL_LINKS.BLOG },
      { name: 'FAQ', href: LOCAL_LINKS.FAQ },
    ];

    const Header: React.FC = () => {
      const [isSticky, setIsSticky] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return (
        <header
          className={`w-full py-4 px-6 md:px-10 lg:px-20 transition-all duration-300 z-50 ${
            isSticky
              ? 'fixed top-0 bg-background/90 backdrop-blur-sm shadow-md'
              : 'relative bg-transparent'
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <Link to={LOCAL_LINKS.HOME} className="flex items-center space-x-2">
              <LeafIcon className="h-8 w-8 text-blue-default animate-pulse-subtle" />
              <span className="text-2xl font-bold text-blue-default">Leaf Consulting</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-blue-default transition-colors text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <CTALink
                href={SALESCENTRI_LINKS.BOOK_DEMO}
                external
                className="gradient-bg text-primary-foreground px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Demo
              </CTALink>
            </nav>

            <div className="lg:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 pt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="text-foreground hover:text-blue-default transition-colors text-lg font-medium py-2"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <CTALink
                      href={SALESCENTRI_LINKS.BOOK_DEMO}
                      external
                      className="gradient-bg text-primary-foreground px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                    >
                      Book a Demo
                    </CTALink>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      );
    };

    export default Header;
