import React, { Component } from "react";
import authService from "../services/authService";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import { Link } from "react-router-dom";

import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless3.png";

class RegisterUser extends Component {
  onSubmit = async (values) => {
    await authService.registerUser(values);
    this.props.history.push("/login");
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="xl:ml-64 xl:flex mt-10">
              <div className="xl:w-6/12">
                <div className="ml-32 ">
                  <h1 className="text-left text-4xl font-bold pod mr-40 ">
                    Registrovať sa
                  </h1>
                  <p className="text-base mr-40">
                    Zaregistrujte sa pre uľahčenie hľadania
                    <br />
                    Vášho domáceho miláčika!
                  </p>
                  <br />
                  <FormTextField
                    name="FirstName"
                    label="Meno"
                    placeholder="Meno"
                  />
                  <FormTextField
                    name="LastName"
                    label="Priezvisko"
                    placeholder="Priezvisko"
                  />
                  <FormTextField
                    name="Email"
                    label="E-mail"
                    placeholder="Email"
                  />
                  <FormTextField
                    name="Password"
                    label="Heslo"
                    type="password"
                    placeholder="Heslo"
                  />
                  <FormTextField
                    name="ConfirmPassword"
                    label="Potvrdenie hesla"
                    type="password"
                    placeholder=""
                  />
                  <div className="text-xs my-8 max-w-xs">
                    Súhlasím so spracovaním emailovej adresy za účelom zaslania
                    noviniek a ponúk emailom.
                  </div>
                  <div className="text-sm my-8 max-w-xs">
                    Ak budete pokračovať ďalej, vyjadrujete tak svoj súhlas s
                    podmienkami používania, pravidlami ochrany súkromia a
                    používaním súborov cookies.
                  </div>
                  <Link
                    className="text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange content-end"
                    to="/selectRegister"
                  >
                    Späť
                  </Link>
                  <button
                    type="submit"
                    disabled={submitting || pristine}
                    className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4"
                  >
                    Registrovať
                  </button>
                  <div class="no-underline hover:underline text-blue-500 text-base my-4">
                    <Link
                      to="/login"
                      className="no-underline hover:underline text-blue-500 text-base"
                    >
                      Už máte svoj účet? Prihláste sa TU.
                    </Link>
                  </div>
                </div>
              </div>
              <div className="xl:w-6/12 background5">
                <div className="mb-64 ">
                  <img
                    src={ilustracia}
                    alt="Logo"
                    className="mb-64 mr-20 -ml-30 mt-4"
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
export default RegisterUser;
