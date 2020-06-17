import React, { Component } from "react";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField"
import authService from "../services/authService";

class RegisterShelter extends Component {

  onSubmit = async values => {
    let response = await authService.registerShelter(values);
    if(response != null){
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormTextField name='name' label='Názov ' placeholder=''/>
              <FormTextField name='shelterCode' label='Identifikačne číslo ' placeholder=''/>
              <FormTextField name='email' label='Email ' placeholder=''/>
              <FormTextField name='phoneNumber' label='Tel. číslo ' placeholder=''/>
              {/* <FormTextField name='firstName' label='Meno administrátora ' placeholder=''/>
              <FormTextField name='lastName' label='Priezvisko administrátora ' placeholder=''/> */}
              <FormTextField name='street' label='Ulica ' placeholder=''/>
              <FormTextField name='city' label='Mesto ' placeholder=''/>
              <FormTextField name='postcode' label='PSČ ' placeholder=''/>
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
