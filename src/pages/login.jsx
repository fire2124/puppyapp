import React, { Component } from "react";
import { AuthorizationContext } from "../authorizationProvider";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import { Link } from "react-router-dom";
import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless.png";

class Login extends Component {
  
  onSubmit = async values => {
    let response = await this.context.login(values);
    if(response){
      this.props.history.push("/allDogs");
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="xl:ml-64 xl:flex xl:my-32 my-10">
              <div className="xl:w-6/12 flex-1">
                <div className="ml-32 ">
                  <h1 className="text-left text-4xl font-bold pod mr-40">
                    Prihlásiť sa
                  </h1>
                  <p className="text-base mr-40">
                    Prihlásiť sa do svojho účtu pre uľahčenie <br />
                    hľadania Vášho domáceho miláčika!
                  </p>
                  <div>
                    <br />
                    <FormTextField
                      name="UserName"
                      label="Meno"
                      text="Meno"
                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                    />
                    <br />
                    <FormTextField
                      name="Password"
                      label="Heslo"
                      text="Heslo"
                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                    />
                  </div>
                
                <Link
                  className="text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange content-end my-8"
                  to="/"
                >
                  Späť
                </Link>
                <button
                  className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 my-8"
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Prihlásiť
                </button>
                <div class="no-underline hover:underline text-blue-500 text-base my-4">
                  <Link
                    to="/"
                    className="no-underline hover:underline text-blue-500 text-base"
                  >
                    Zabudli ste svoje heslo?
                  </Link>
                </div>
                <div class="no-underline hover:underline text-blue-500 text-base">
                  <Link
                    to="/selectRegister"
                    className="no-underline hover:underline text-blue-500 text-base"
                  >
                    Ešte nie ste zaregistrovaný? Vytvorte si účet TU.
                  </Link>
                </div>
              </div>
              </div>
              <div className="xl:w-6/12 backgroundLogin flex-1">
                <div className="xl:mb-64">
                  <img
                    src={ilustracia}
                    alt="Logo"
                    className="xl:mb-64 xl:-ml-40 xl:-mt-32"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      />
    );
  }
}
Login.contextType = AuthorizationContext;
export default Login;
