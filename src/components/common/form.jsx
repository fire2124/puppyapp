import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    //console.log(obj);

    const schema = { [name]: this.schema[name] };
    //console.log(schema);
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    console.log("---------------------------------");
    //console.log(data);
    console.log(input);
    console.log(input.type);
    console.log(input.value);

    switch (input.type) {
      case "boolean":
        data[input.name] = Boolean(input.value);
        break;
      case "number":
        data[input.name] = Number(input.value);
        break;
      case "date":
        data[input.name] = Date(input.value);
        break;
      case "text":
        data[input.name] = String(input.value);
        break;
      case "password":
        data[input.name] = String(input.value);
        break;
    }
    console.log(data);

    this.setState({ data, errors });
    //console.log(data);
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type) {
    const { data, errors } = this.state;
    console.log(type);

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
