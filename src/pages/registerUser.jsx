import React, { Component } from "react";
import authService from "../services/authService";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import { Link } from "react-router-dom";
import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless3.png";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";

class RegisterUser extends Component {
  //popup
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

  onSubmit = async (values) => {
    await authService.registerUser(values);
    //this.props.history.push("/login");
    this.openModal = this.openModal.bind(this);
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
                  <h1 className="text-left text-4xl font-bold pod mr-40  ">
                    Registrovať sa
                  </h1>
                  <p className="text-base mr-40 my-8">
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
                  <div>
                    <div className="flex flex-wrap mt-5">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        className="xl:mr-2 w-1/8 xl:mt-1"
                      />
                      <div className="text-xs  max-w-xs w-7/8">
                        Súhlasím so spracovaním emailovej adresy za účelom
                        zaslania noviniek a ponúk emailom.
                      </div>
                    </div>

                    <div className="text-sm my-8 max-w-xs">
                      Ak budete pokračovať ďalej, vyjadrujete tak svoj súhlas s
                      podmienkami používania, pravidlami ochrany súkromia a
                      používaním súborov cookies.
                    </div>
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
                    onClick={this.openModal}
                  >
                    Registrovať
                  </button>
                  <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                  >
                    <div className="modal">
                      <a className="close" onClick={this.closeModal}>
                        &times;
                      </a>
                      <div className="font-bold text-4xl flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
                        Práve Vám bol odoslaný potvrdzovací email
                      </div>
                      <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5">
                        <div className="mx-10">
                          <button class="flex1 my-5 text-2xl">
                            Pre dokončenie registrácie si prosím skontrolujte
                            Vašu emailovú schránku a potvrďte email.
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-no-wrap mx-auto justify-center mb-10">
                        <NavLink
                          className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4"
                          to="/"
                        >
                          Späť na stránku
                        </NavLink>
                      </div>
                    </div>
                  </Popup>
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
