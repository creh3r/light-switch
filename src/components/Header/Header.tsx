import React from 'react';

type HeaderProps = {
  title: string,
  children: React.ReactNode,
};

/**
 * Render the game header
 *
 * @param title - The header title
 * @param children - The children
 */
function Header({ title, children }: HeaderProps) {
  return (
    <div className="header">
      <div className="header__title">
        {title}
      </div>
      <div className="header__children">
        { children }
      </div>
    </div>
  );
}

export default Header;
