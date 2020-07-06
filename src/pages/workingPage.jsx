import React, { Component } from "react";
import { AuthorizationContext } from "../authorizationProvider";
import { Form } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import { Link } from "react-router-dom";
import ilustracia from "../staticImage/illustrations/Untitled_Artwork 2.png";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import authService from "../services/authService";

class WorkingPage extends Component {
  render() {
    return (
      <div className="xl:ml-64 xl:flex xl:my-32 my-10 ">
        <div className="xl:w-6/12 flex-1 mt-64">
          <div className="ml-32 ">
            <div className="text-left text-4xl font-bold pod mr-40">
              Na stránke pracujeme
            </div>

            <div className="flex1 my-5 text-2xl text-black ">
              Túto časť Vám v krátkom čase sprístupníme.
            </div>

            <div className="flex flex-no-wrap mx-auto ">
              <Link
                to={`/`}
                className="text-orange font-bold font-sm text-center bg-orange-400 m-2 inline-block mt-10"
              >
                {"<"} Späť
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-6/12  flex-1">
          <div className="xl:mb-64 xl:mb-64 xl:mr-56 ">
            <img src={ilustracia} alt="Logo" />
          </div>
        </div>
      </div>
    );
  }
}
export default WorkingPage;
