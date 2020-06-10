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
            <div>
            <h1 className="text-left text-4xl font-bold pod mr-40">
                Registrovať sa
              </h1>
              <p className="text-base mr-40">
                Zaregistrujte sa a pomôžte tak Vašim<br />
                psíkom nájsť si nový domov!
              </p>
              <br/>
              <FormTextField
                name="name"
                label="Meno útulku"
                className="text-4xl"
              />
              <FormTextField name="city" label="Mesto"  className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"/>
              <FormTextField name="street" label="Ulica" className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none" />
              <FormTextField name="email" label="Email"  className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"/>
              <FormTextField name="password" label="Heslo"  className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"/>
              <FormTextField name="IcoDic" label="IČO/DIČ"  className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"/>
              <FormTextField name="email" label="Email"  className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"/>
            </div>
            <br/>
            <Link
              className="text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange content-end"
              to="/"
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
            {/*<pre>{JSON.stringify(values, 0, 2)}</pre>*/}
            <div class="no-underline hover:underline text-blue-500 text-base">
              <Link
                to="/login"
                className="no-underline hover:underline text-blue-500 text-base"
              >
               Už máte svoj účet? Prihláste sa TU.
              </Link>
            </div>
            <div className="flex flex-no-wrap mx-auto background5">
              <div className="flex-none w-6/12 mx-auto">
                <img src={ilustracia} alt="Logo" />
              </div>
            </div>
          </form>
        )}
      />
    );
  }
}

export default RegisterShelter;
