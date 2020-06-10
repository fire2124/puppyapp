import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthorizationContext } from "../authorizationProvider";
import ilustracia from "../staticImage/illustrations/logo-odtlacok.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Link className="navbar-brand" to="/">
        PuppyApp
      </Link> */}
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" /> flex justify-start bg-orange-200 relative 
        //container flex flex-wrap items-center justify-between flex-wrap bg-teal-500 p-6
      </button> */}
      <AuthorizationContext.Consumer>
        {({ loggedIn, userFirstName }) => (
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {loggedIn !== true && (
                <React.Fragment className="py-6">
                  <div className=" md:flex md:items-center md:justify-start mx-auto py-5 px-5 space-x-40 ">
                    <div className="float-left justify-start flex1">
                      <img src={ilustracia} alt="Logo" width="30px" />
                    </div>
                    <div className="space-x-1 justify-center flex2">
                      <NavLink
                        className=" text-black text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 "
                        to="/"
                      >
                        Hľadaj psíka
                      </NavLink>
                      <NavLink
                        className=" text-black text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 "
                        to="/"
                      >
                        Útulky
                      </NavLink>
                      <NavLink
                        className="  text-black text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 "
                        to="/"
                      >
                        „HAU TU”
                      </NavLink>
                    </div>
                    <div className="float-right justify-end flex3 ">
                     <NavLink
                        className="  text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange content-end "
                        to="/login"
                      >
                        Prihlásanie
                      </NavLink>
                      <NavLink
                        className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 "
                        to="/selectRegister"
                      >
                        Registrácia
                      </NavLink>
                    </div>
                  </div>
                </React.Fragment>
              )}
              {loggedIn === true && (
                <React.Fragment className="flex justify-start bg-orange-200">
                  <NavLink
                    className="text-orange-700 text-center bg-orange-400 px-4 py-2 m-2"
                    to="/userProfile"
                  >
                    {userFirstName} Profil
                  </NavLink>
                  <NavLink
                    className="text-orange-700 text-center bg-orange-400 px-4 py-2 m-2"
                    to="/logout"
                  >
                    Odhlásiť
                  </NavLink>
                </React.Fragment>
              )}
            </div>
          </div>
        )}
      </AuthorizationContext.Consumer>
    </nav>
  );
};
NavBar.contextType = AuthorizationContext;
export default NavBar;
