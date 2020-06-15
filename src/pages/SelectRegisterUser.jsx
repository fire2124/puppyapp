import React, { Component } from "react";
import { Link } from "react-router-dom";

import vektor1 from "../staticImage/vectors/utulok.png";
import vektor2 from "../staticImage/vectors/pouzivatel.png";


class SelectRegisterUser extends Component {
  render() {
    return (
      //m-auto
      <div className="flex flex-no-wrap  ">
        <div className="flex-none w-6/12 text-center">
          <Link
            to="/registerUser"
            className="text-4xl font-bold pod my-64 container1"
          >
            Používateľ
          </Link>
        </div>
        <div className="flex-none w-6/12  text-center">
          <Link
            to="/registerShelter"
            className=" text-4xl font-bold pod my-64 container2"
          >
            Útulok
          </Link>
        </div>
      </div>
    );
  }
}

export default SelectRegisterUser;
