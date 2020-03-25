import React, { Component } from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <lable htmlFor={name}>{label}</lable>
      <input
        {...rest}
        autoFocus
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
