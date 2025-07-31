import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button, ButtonProps } from '@/components/ui/button';

    interface CTALinkProps extends ButtonProps {
      href: string;
      children: React.ReactNode;
      external?: boolean;
      utm?: string;
    }

    const CTALink: React.FC<CTALinkProps> = ({
      href,
      children,
      external = false,
      utm,
      ...props
    }) => {
      const fullHref = utm ? `${href}${utm}` : href;

      if (external) {
        return (
          <Button asChild {...props}>
            <a href={fullHref} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          </Button>
        );
      }

      return (
        <Button asChild {...props}>
          <Link to={fullHref}>{children}</Link>
        </Button>
      );
    };

    export default CTALink;
