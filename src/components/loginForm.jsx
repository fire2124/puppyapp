import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "", rememberMe: true },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    rememberMe: Joi.boolean().required().label("RememberMe"),
  };

  doSubmit = async () => {
    // Call the server
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password, data.rememberMe);

      //console.log(jwt); //json webtoken
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/"; // redirect to homepage after login
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Prihlásanie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Meno")}
          {this.renderInput("password", "Heslo", "password")}
          {this.renderInput("rememberMe", "Pamataj")}
          {this.renderButton("Prihlásiť")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
