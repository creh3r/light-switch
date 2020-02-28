import React from 'react';

type ButtonProps = {
  title: string,
  clickHandler: () => void,
  theme: string
};

const defaultProps = {
  theme: 'primary',
};

/**
 * Render a themed button
 *
 * @param title - The button title
 * @param clickHandler - The click handler
 * @param theme - The button theme css class
 */
function Button({ title, clickHandler, theme }: ButtonProps) {
  return (
    <button
      className={`button button--${theme}`}
      type="button"
      onClick={() => clickHandler()}
    >
      {title}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
