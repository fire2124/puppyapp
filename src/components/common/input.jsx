import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  console.log(error);

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && (
        <div className="alert alert-danger">{JSON.stringify(error)}</div>
      )}
    </div>
  );
};

export default Input;
