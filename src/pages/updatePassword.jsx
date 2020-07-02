import React, { Component } from "react";
import { AuthorizationContext } from "../authorizationProvider";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import { Link } from "react-router-dom";
import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless4.png";
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

  onSubmit = async (values) => {
    try {
      let response = await authService.resetPassword(values);
      console.log(response);

      if (response) {
        this.openModal();
        //this.props.history.push("/");
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
                    Obnovenie hesla
                  </h1>

                  <div className="mt-16">
                    <br />
                    <FormTextField
                      name="Password1"
                      label="Nové heslo"
                      text="*****"
                      type="password"
                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                    />
                    <br />
                    <FormTextField
                      name="Password2"
                      label="Zopakujte heslo"
                      text="*****"
                      type="password"
                      className="bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                    />
                    todo: email, token
                  </div>

                  <button
                    className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 my-8 "
                    type="submit"
                    // onClick={this.openModal}
                    // disabled={submitting || pristine}
                  >
                    Obnoviť
                  </button>

                  <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                  >
                    <div className="modal">
                      <div className="font-bold text-4xl text-center text-black flex flex-no-wrap mx-auto  justify-center mt-20 mb-3">
                        Vaše heslo bolo <br />
                        úspešne obnovené
                      </div>
                      <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-3">
                        <div className="mx-10">
                          <div className="flex1 my-5 text-2xl text-black text-center">
                            Môžete pokračovať na stránku.
                          </div>

                          <div className="flex flex-no-wrap mx-auto justify-center mb-10 mr-10">
                            <Link
                              to={`/`}
                              className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 my-3 "
                              >
                              Pokračovať
                            </Link>
                            {/* <button
                              className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 w-1/2"
                              type="submit"
                              disabled={submitting || pristine}
                            >
                              Odoslať
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className="xl:w-6/12  flex-1">
                <div className="xl:mb-64 xl:mb-64 xl:mr-56 ">
                  <img src={ilustracia} alt="Logo" />
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
