import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { PostData } from "../../services/PostData";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  //signUp = (res, type) => {};

  doSubmit = () => {
    //call the server const username = this.username.current.value;
    console.log("Submitted ");
  };

  render() {
    /*  const responseGoogle = response => {
      console.log(response);
      this.signUp(response, "google");
    };

    const responseFacebook = response => {
      console.log(response);
      this.signUp(response, "facebook");
    };*/

    return (
      <div>
        <h1>Prihlásanie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Meno")}
          {this.renderInput("password", "Heslo", "password")}
          {this.renderButton("Prihlásiť")}
        </form>

        {/*<FacebookLogin
          appId="2509639565937576"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />*/}
        {/* <GoogleLogin
          //clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        /> */}
      </div>
    );
  }
}

export default LoginForm;
