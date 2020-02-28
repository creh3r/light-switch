import React from 'react';

type FooterProps = {
  children: React.ReactNode,
};

/**
 * Render the game footer
 *
 * @param children - The children
 */
function Footer({ children }: FooterProps) {
  return (
    <div className="footer">
      { children }
    </div>
  );
}

export default Footer;
