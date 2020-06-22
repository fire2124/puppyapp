import React, { Component } from "react";
import { AuthorizationContext } from "../authorizationProvider";
import { Form } from "react-final-form";
import FormTextField from "./common/formTextField"

class Login extends Component {

  onSubmit = async values => {
    let response = await this.context.login(values);
    if(response){
      this.props.history.push("/dog");
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormTextField name='UserName' label='Email ' placeholder='Email' />
              <FormTextField name='Password' label='Heslo ' placeholder='Heslo'/>
            </div>

            <button type="submit" disabled={submitting || pristine}>
                Prihlásiť
            </button>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    );
  }
}
Login.contextType = AuthorizationContext;
export default Login;
