import React, { Component } from "react";
import { Link } from "react-router-dom";

import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless2.png";
import ilustracia2 from "../staticImage/illustrations/registracia_utulok.png";

class SelectRegisterUser extends Component {
  render() {
    return (
      //m-auto
      <div>
        <div className="xl:flex xl:h-64 my-56 ">
          <div className=" xl:w-6/12 xl:text-left xl:ml-64 xl:-mt-32 xl:mx-100 xl:block xl:box-border container1">
            <div className="">
              <a href="/registerUser">
                <img src={ilustracia} alt="Logo" width="500px" />
              </a>
            </div>
            <div className="">
              <Link
                to="/registerUser"
                className="text-6xl font-bold  ml-16 pod "
              >
                Používateľ
              </Link>
            </div>
          </div>

          <div className=" xl:w-6/12 text-left xl:ml-56 xl:-mt-16 xl:mx-100 xl:mr-64 xl:block xl:box-border mt-20 container2">
            <div className=" xl:mr-32">
              <a href="/registerShelter">
                <img src={ilustracia2} alt="Logo" width="500px" />
              </a>
            </div>

            <div className="mb-4">
              <Link
                to="/registerShelter"
                className="text-6xl font-bold  ml-32 pod "
              >
                Útulok
              </Link>
            </div>
          </div>
        </div>

        <div className="xl:text-left ">
          <div className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-20 ml-20">
            <Link to="/"> Späť </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectRegisterUser;
