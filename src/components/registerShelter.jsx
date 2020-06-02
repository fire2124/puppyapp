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
              <FormTextField name='name' label='Meno útulku ' placeholder=''/>
              <FormTextField name='city' label='Mesto ' placeholder=''/>
              <FormTextField name='street' label='Ulica ' placeholder=''/>
              <FormTextField name='email' label='Email ' placeholder=''/>
              <FormTextField name='IcoDic' label='IČO/DIČ ' placeholder=''/>
              <FormTextField name='password' label='Heslo ' placeholder=''/>
              <FormTextField name='confirmPassword' label='Potvrdenie hesla ' placeholder=''/>
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
