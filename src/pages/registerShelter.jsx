import React, { Component } from "react";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import authService from "../services/authService";
import { Link } from "react-router-dom";
import ilustracia from "../staticImage/illustrations/registracia_utulok.png";

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
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="xl:ml-64 xl:flex">
              <div className="xl:w-6/12 xl:flex1">
                <div className="ml-32 ">
                  <div>
                    <h1 className="text-left text-4xl font-bold pod mr-40 ">
                      Registrovať sa
                    </h1>
                    <p className="text-base mr-40 my-8">
                      Zaregistrujte sa a pomôžte tak Vašim
                      <br />
                      psíkom nájsť si nový domov!
                    </p>
                  </div>
                  <div>
                    <FormTextField
                      name="name"
                      label="Názov útulku"
                      className="text-4xl my-8"
                      placeholder=''
                    />
                    <FormTextField
                      name="shelterCode"
                      label="Identifikačne číslo"
                      className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                      placeholder=''
                    />
                    <FormTextField
                      name="email"
                      label="E-mail"
                      className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                      placeholder=''
                    />
                    <FormTextField
                      name="phoneNumber"
                      label="Telefónne číslo"
                      className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                      placeholder=''
                    />
                    <FormTextField
                      name="street"
                      label="Ulica"
                      className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                      placeholder=''
                    />
                    <FormTextField
                      name="city"
                      label="Mesto"
                      className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                      placeholder=''
                    />
                     <FormTextField
                      name="postcode"
                      label="PSČ"
                      className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                      placeholder=''
                    />
                     <FormTextField
                      name="password"
                      label="Heslo"
                      type="password"
                      className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                      placeholder=''
                    />
                     <FormTextField
                      name="confirmPassword"
                      label="Potvrdenie hesla"
                      type="password"
                      className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                      placeholder=''
                    />
                  </div>
                  <div>
                    <div className="text-xs my-8 max-w-xs">
                      Súhlasím so spracovaním emailovej adresy za účelom
                      zaslania noviniek a ponúk emailom.
                    </div>
                    <div className="text-sm my-8 max-w-xs">
                      Ak budete pokračovať ďalej, vyjadrujete tak svoj súhlas s
                      podmienkami používania, pravidlami ochrany súkromia a
                      používaním súborov cookies.
                    </div>
                  </div>
                  <div>
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
              </div>
              <div className="xl:w-6/12 background5 xl:flex-1">
                <div className="xl:mb-64">
                  <img
                    src={ilustracia}
                    alt="Logo"
                    className="mb-0 xl:mt-32 mr-20 -ml-14"
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

export default RegisterShelter;