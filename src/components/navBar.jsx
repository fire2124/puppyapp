import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthorizationContext } from "../authorizationProvider";
import ilustracia from "../staticImage/illustrations/logo-odtlacok.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <AuthorizationContext.Consumer>
        {({ loggedIn, userFirstName }) => (
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {loggedIn !== true && (
                <React.Fragment>
                  <div className=" xl:py-5 xl:px-5 xl:flex justify-between">
                    <div className=" xl:px-2 xl:py-2 xl:m-2">
                      <a href="/">
                        <img src={ilustracia} alt="Logo" width="30px" />
                      </a>
                    </div>
                    <div className="  xl:px-4 xl:py-2 xl:m-2 xl:justify-center xl:px-4">
                      <div className="justify-center text-center">
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
                    </div>
                    <div className=" ">
                      <NavLink
                        className=" text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange inline-block"
                        to="/login"
                      >
                        Prihlásanie
                      </NavLink>
                      <NavLink
                        className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
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
                    className="text-orange-700 text-center bg-orange-400 px-4 py-2 "
                    to="/userProfile"
                  >
                    {userFirstName} Profil
                  </NavLink>
                  <NavLink
                    className="text-orange-700 text-center bg-orange-400 px-4 py-2"
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
