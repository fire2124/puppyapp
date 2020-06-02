import React, { Component } from "react";
import { AuthorizationContext } from "../authorizationProvider";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField"

class Login extends Component {

  onSubmit = async values => {
    await this.context.login(values);
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormTextField name='UserName' label='Meno' />
              <FormTextField name='Password' label='Heslo' />
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
