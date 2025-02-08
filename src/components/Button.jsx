import React from "react";

const Button = ({
  className = "",
  children,
  handleClick = () => {},
  ...props
}) => {
  return (
    <button className={`${className}`} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
