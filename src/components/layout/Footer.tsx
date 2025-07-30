import React from 'react';
    import { Link } from 'react-router-dom';
    import { LeafIcon, FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
    import CTALink from '@/components/common/CTALink';
    import { LOCAL_LINKS, SALESCENTRI_LINKS } from '@/constants/links';

    const Footer: React.FC = () => {
      const currentYear = new Date().getFullYear();
      const utmTracking = '?utm_source=Leaf-Consulting.com&utm_medium=footer&utm_campaign=partner_network';

      return (
        <footer className="bg-blue-dark text-silver-default py-12 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link to={LOCAL_LINKS.HOME} className="flex items-center space-x-2">
                <LeafIcon className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold text-white">Leaf Consulting</span>
              </Link>
              <p className="text-sm text-white">
                Empowering businesses with seamless CRM implementation and optimization for unparalleled sales growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-white hover:text-blue-light transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Twitter" className="text-white hover:text-blue-light transition-colors">
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-light transition-colors">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Instagram" className="text-white hover:text-blue-light transition-colors">
                  <InstagramIcon className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to={LOCAL_LINKS.HOME} className="text-white hover:text-blue-light transition-colors">Home</Link></li>
                <li><Link to={LOCAL_LINKS.FEATURES} className="text-white hover:text-blue-light transition-colors">Features</Link></li>
                <li><Link to={LOCAL_LINKS.PRICING} className="text-white hover:text-blue-light transition-colors">Pricing</Link></li>
                <li><Link to={LOCAL_LINKS.ABOUT} className="text-white hover:text-blue-light transition-colors">About Us</Link></li>
                <li><Link to={LOCAL_LINKS.CONTACT} className="text-white hover:text-blue-light transition-colors">Contact</Link></li>
                <li><Link to={LOCAL_LINKS.BLOG} className="text-white hover:text-blue-light transition-colors">Blog</Link></li>
                <li><Link to={LOCAL_LINKS.FAQ} className="text-white hover:text-blue-light transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2">
                <li><a href={SALESCENTRI_LINKS.PSA_SUITE} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-light transition-colors">CRM Implementation</a></li>
                <li><a href={SALESCENTRI_LINKS.SALES_INQUIRY} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-light transition-colors">Sales Process Optimization</a></li>
                <li><a href={SALESCENTRI_LINKS.INTEGRATION_REQUESTS} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-light transition-colors">System Integration</a></li>
                <li><a href={SALESCENTRI_LINKS.SERVICE_DATA_ENRICHMENT} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-light transition-colors">Data Enrichment</a></li>
                <li><a href={SALESCENTRI_LINKS.SERVICE_SDR} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-light transition-colors">SDR Services</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <address className="not-italic space-y-2 text-white">
                <p>123 CRM Avenue, Suite 400</p>
                <p>Raleigh, NC 27601</p>
                <p>United States</p>
                <p>Email: <a href="mailto:info@leaf-consulting.com" className="text-white hover:text-blue-light transition-colors">info@leaf-consulting.com</a></p>
                <p>Phone: <a href="tel:+19195551234" className="text-white hover:text-blue-light transition-colors">+1 (919) 555-1234</a></p>
              </address>
            </div>
          </div>

          <div className="border-t border-silver-default/30 mt-8 pt-8 text-center text-sm text-white">
            <p>&copy; {currentYear} Leaf Consulting Solutions. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link to={LOCAL_LINKS.PRIVACY_POLICY} className="text-white hover:text-blue-light transition-colors">Privacy Policy</Link>
              <Link to={LOCAL_LINKS.TERMS_OF_SERVICE} className="text-white hover:text-blue-light transition-colors">Terms of Service</Link>
            </div>
            <p className="mt-4">
              <a
                href={`https://salescentri.com${utmTracking}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-light transition-colors"
              >
                Powered by Sales Intelligence Platform
              </a>
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;
