import React, { Component } from "react";
import { AuthorizationContext } from "../authorizationProvider";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import { Link } from "react-router-dom";
import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless.png";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import authService from "../services/authService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  onSubmitForgotPassword = async (values) => {
    console.log(values);

    try {
      let response = await authService.forgotPassword(values);
      console.log(response);

      if (response) {
        this.props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  onSubmit = async (values) => {
    try {
      let response = await this.context.login(values);
      console.log(response);

      if (response) {
        this.props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  <p className="text-base mr-40 my-8">
                    Prihláste sa do svojho účtu pre uľahčenie <br />
                    hľadania Vášho domáceho miláčika!
                  </p>
                  <div>
                    <br />
                    <FormTextField
                      name="UserName"
                      label="E-mail"
                      text="E-mail"
                      type="text"
                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                    />
                    <br />
                    <FormTextField
                      name="Password"
                      label="Heslo"
                      text="Heslo"
                      type="password"
                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                    />
                  </div>
                  <Link
                    className="text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange  my-8 "
                    to="/"
                  >
                    Späť
                  </Link>
                  <button
                    className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 my-8 "
                    type="submit"
                    disabled={submitting || pristine}
                  >
                    Prihlásiť
                  </button>
                  <div className="no-underline hover:underline text-blue-500 text-base my-4">
                    <button
                      type="submit"
                      className="no-underline hover:underline text-blue-500 text-base"
                      onClick={this.openModal}
                    >
                      Zabudli ste svoje heslo?
                    </button>
                    
                    <Popup
                      className="modal"
                      open={this.state.open}
                      closeOnDocumentClick
                      onClose={this.closeModal}
                    >
                      <div className="modal"> 
                        <div className="font-bold text-4xl text-black flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
                          Zabudli ste svoje heslo?
                        </div>
                        <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5">
                          <div className="mx-10">
                            <div className="flex1 my-5 text-2xl text-black text-center">
                              Zadajte svoju e-mailovú adresu a my
                              <br />
                              Vám pošleme link na obnovu Vášho hesla.
                            </div>
                            <div className="mt-10 ml-20">
                              <Form
                                onSubmit={this.onSubmitForgotPassword}
                                render={({
                                  handleSubmit,
                                  form,
                                  submitting,
                                  pristine,
                                  values,
                                }) => (
                                  <form onSubmit={handleSubmit}>
                                    <FormTextField
                                      name="email"
                                      type="email"
                                      text="Jozefdrabik@gmail.com"
                                      className="bg-transparent  w-full text-gray-700  focus:outline-none"
                                    />
                                    <div className="flex flex-no-wrap mx-auto justify-center mb-10 mr-10">
                                      <a
                                        className="text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange w-1/2"
                                        to="/"
                                        onClick={this.closeModal}
                                      >
                                        Späť
                                      </a>
                                      <button
                                        className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 w-1/2"
                                        type="submit"
                                        disabled={submitting || pristine}
                                      >
                                        Odoslať
                                      </button>
                                    </div>
                                  </form>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                       </div> 
                    </Popup>
                  </div>
                  {/* <Pop/> */}
                  <div className="no-underline hover:underline text-blue-500 text-base">
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
