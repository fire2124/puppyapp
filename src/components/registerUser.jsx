import React, { Component } from "react";
import authService from "../services/authService";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";

class RegisterUser extends Component {

  onSubmit = async values => {
    await authService.registerUser(values);
    this.props.history.push("/login");
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormTextField name='FirstName' label='Meno' />
              <FormTextField name='LastName' label='Priezvisko' />
              <FormTextField name='Email' label='Email' />
              <FormTextField name='Password' label='Heslo' />
            </div>

            <button type="submit" disabled={submitting || pristine}>
              Registrovať
            </button>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    );
  }
}
export default RegisterUser;
