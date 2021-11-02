import React from "react";
import "../../styles/input.css";
import PropTypes from "prop-types";
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
        fontSize: `${size}`,
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
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  onChange: PropTypes.func,
  onsubmit: PropTypes.func,
};
Input.defaultProps = {
  text: "Search",
  placeholder: "Input",
};

export default Input;
