import React from "react";

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, children, ...rest }) => {
  return (
    <button
      className={`flex items-center justify-center px-3 border-0 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
