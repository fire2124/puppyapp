import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().min(8).max(256).required().label("Meno"),
    password: Joi.string().min(8).max(256).required().label("Heslo"),
  };

  doSubmit = async () => {
    // Call the server

    try {
      const { data } = this.state;
      console.log(data);

      await auth.login(data.username, data.password);
      //console.log(getJwt()); //json webtoken
      const { state } = this.props.location;
      //window.location = state ? state.from.pathname : "/"; // redirect to homepage after login
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    //if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Prihlásanie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Meno")}
          {this.renderInput("password", "Heslo", "password")}
          {this.renderButton("Prihlásiť")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
