import React from 'react';
import './Button.css'

const Button = ({ children, ...props }) => {
  console.log('Button rendered with children:', children);
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
