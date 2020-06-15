import React, { Component } from "react";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import authService from "../services/authService";
import { Link } from "react-router-dom";
import ilustracia from "../staticImage/illustrations/registracia_utulok.png";

class RegisterShelter extends Component {
  onSubmit = async (values) => {
    await authService.registerShelter(values);
    this.props.history.push("/login");
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="ml-64 flex ">
              <div className="w-6/12">
                <div className="ml-32 ">
                  <h1 className="text-left text-4xl font-bold pod mr-40 ">
                    Registrovať sa
                  </h1>
                  <p className="text-base mr-40 my-8">
                    Zaregistrujte sa a pomôžte tak Vašim
                    <br />
                    psíkom nájsť si nový domov!
                  </p>
                  <FormTextField
                    name="name"
                    label="Názov útulku"
                    className="text-4xl my-8"
                  />
                  <FormTextField
                    name="city"
                    label="Mesto"
                    className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                  />
                  <FormTextField
                    name="street"
                    label="Ulica"
                    className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                  />
                  <FormTextField
                    name="email"
                    label="Email"
                    className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                  />
                  <FormTextField
                    name="password"
                    label="Heslo"
                    className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                  />
                  <FormTextField
                    name="IcoDic"
                    label="IČO/DIČ"
                    className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                  />
                  <FormTextField
                    name="email"
                    label="Email"
                    className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
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
                
                <div class="no-underline hover:underline text-blue-500 text-base my-8">
                  <Link
                    to="/login"
                    className="no-underline hover:underline text-blue-500 text-base"
                  >
                    Už máte svoj účet? Prihláste sa TU.
                  </Link>
                  </div>
                </div>
              </div>
              <div className="w-6/12 background5">
                <div className="mb-64">
                  <img src={ilustracia} alt="Logo" className="mb-64 mr-32 -ml-48" />
                </div>
              </div>
            </div>
          </form>
        )}
      />
    );
  }
}

export default RegisterShelter;
