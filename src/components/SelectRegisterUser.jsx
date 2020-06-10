import React, { Component } from "react";
import { Link } from "react-router-dom";

import vektor1 from "../staticImage/vectors/Vector-1.png";
import vektor2 from "../staticImage/vectors/Vector-2.png";
import vektor3 from "../staticImage/vectors/Vector-3.png";
import vektor4 from "../staticImage/vectors/Vector-4.png";

class SelectRegisterUser extends Component {
  render() {
    return (
        <div className="flex flex-no-wrap m-auto">
            <div className="flex-none w-3/12 m-auto ">
        <Link to="/registerUser" className="text-left text-4xl font-bold pod mr-40">
          Používateľ
        </Link>
        <Link to="/registerShelter" className="text-left text-4xl font-bold pod mr-40">
          Útulok
        </Link>
        </div>
        </div>
    );
  }
}

export default SelectRegisterUser;
