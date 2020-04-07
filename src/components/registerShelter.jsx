import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import * as userService from "../services/userService";

class RegisterShelter extends Form {
  state = {
    data: {
      name: "",
      city: "",
      street: "",
      shelterCode: "",
      email: "",
      password: "",
      IcoDic: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(4).max(256).label("Name"),
    city: Joi.string().required().min(4).max(256).label("City"),
    street: Joi.string().required().min(4).max(256).label("Street"),
    shelterCode: Joi.string().required().min(4).max(6).label("ShelterCod"),
    email: Joi.string().email().min(5).max(256).required().label("Mail"),
    password: Joi.string().min(8).max(256).required().label("Password"),
    IcoDic: Joi.string().required().min(4).max(256).label("Ico/Dic"),
  };

  doSubmit = async () => {
    // Call the server
    try {
      //console.log(this.state.data);

      const response = await userService.register(this.state.data);
      //console.log("heres");

      auth.loginWithJwt(response.headers["x-auth-token"]);
      //const log = auth.loginWithJwt(response.headers["x-auth-token"]);
      //console.log(log);

      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Registrácia útulku</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Meno útulku")}
          {this.renderInput("shelterCode", "Číslo útulku")}
          {this.renderInput("city", "mesto")}
          {this.renderInput("street", "Ulica")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Heslo", "password")}
          {this.renderInput("IcoDic", "IČO/DIČ")}
          {this.renderButton("Registrovať")}
        </form>
      </div>
    );
  }
}

export default RegisterShelter;
