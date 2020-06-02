import React, { Component } from "react";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField"
import authService from "../services/authService";

class RegisterShelter extends Component {

  onSubmit = async values => {
    await authService.registerShelter(values);
    this.props.history.push("/login");
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormTextField name='name' label='Meno útulku' />
              <FormTextField name='city' label='Mesto' />
              <FormTextField name='street' label='Ulica' />
              <FormTextField name='email' label='Email' />
              <FormTextField name='password' label='Heslo' />
              <FormTextField name='IcoDic' label='IČO/DIČ' />
              <FormTextField name='email' label='Email' />
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

export default RegisterShelter;
