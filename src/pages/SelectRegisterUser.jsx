import React, { Component } from "react";
import { Link } from "react-router-dom";

import ilustracia from "../staticImage/illustrations/Ilustracia_backgroundless2.png";
import ilustracia2 from "../staticImage/illustrations/registracia_utulok.png";

class SelectRegisterUser extends Component {
  render() {
    return (
      //m-auto
      <div className="flex h-64 my-56 ">
        <div className=" w-6/12 text-left ml-64 -mt-32 mx-100  block box-border container1">
          <div className="">
          <a href="/registerUser"><img src={ilustracia} alt="Logo" width="500px"/></a>
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
        <div className=" w-6/12 text-left ml-56 -mt-16 mx-100 mr-64   block box-border container2">
          <div className=" mr-32">
          <a href="/registerShelter"><img src={ilustracia2} alt="Logo" width="500px"/></a>
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
    );
  }
}

export default SelectRegisterUser;
