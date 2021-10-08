import React from "react";
import "../../styles/input.css";
import PropTypes, { number, string } from "prop-types";
function Input({
  className,
  type,
  placeholder,
  text,
  size,
  value,
  width,
  height,
  radius,
  padding,
  margin,
  onChange,
  onSubmit,
  ...props
}) {
  return (
    <input
      style={{
        width: `${width}`,
        height: `${height}`,
        padding: `${padding}`,
        margin: `${margin}`,
        borderRadius: `${radius}`,
        fontSize: `${size}`
      }}
      className={`input-container ${className ? className : ""}`}
      onChange={onChange}
      onSubmit={onSubmit}
      type={type}
      placeholder={placeholder ? placeholder : text}
      value={value}
      {...props}
    />
  );
}

Input.propsTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOf(number, string),
};
Input.defaultProps = {
  text: "Search",
};

export default Input;
