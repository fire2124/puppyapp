import React from "react";
import { NavLink } from "react-router-dom";
import { AuthorizationContext } from "../authorizationProvider";
import ilustracia from "../staticImage/illustrations/logo-odtlacok.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <AuthorizationContext.Consumer>
        {({ authParams}) => (
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            {!authParams.loggedIn && (
                <React.Fragment >
                  <div className=" xl:py-5 xl:px-5 xl:flex justify-between">
                    <div className=" px-2 py-2 m-2">
                    <a href="/"><img src={ilustracia} alt="Logo" width="30px"/></a>
                    </div>
                    <div className="  px-4 py-2 m-2 justify-center px-4">
                      <div className="justify-center text-center">
                        <NavLink
                          className=" text-black text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 "
                          to="/allDogs"
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
              {authParams.loggedIn && authParams.userRole === 'User' && (
                <React.Fragment className="xl:py-5 xl:px-5 xl:flex justify-between">
                  <NavLink
                    className=" text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange inline-block"
                    to="/userProfile"
                  >
                    Profil
                  </NavLink>
                  <NavLink
                    className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
                    to="/logout"
                  >
                    Odhlásiť
                  </NavLink>
                </React.Fragment>
              )}
              {authParams.loggedIn && authParams.userRole === 'ShelterAdmin' && (
                <React.Fragment className="xl:py-5 xl:px-5 xl:flex justify-between">
                  <NavLink
                    className="text-orange-700 text-center bg-orange-400 px-4 py-2 "
                    to="/shelterProfile"
                  >
                    Profil útulku
                  </NavLink>
                  <NavLink
                    className="text-orange-700 text-center bg-orange-400 px-4 py-2 "
                    to="/addDog"
                  >
                    Pridať psa
                  </NavLink>
                  <NavLink
                    className="text-orange-700 text-center bg-orange-400 px-4 py-2"
                    to="/logout"
                  >
                    Odhlásiť
                  </NavLink>
                </React.Fragment>
              )}
              {authParams.loggedIn && authParams.userRole === 'Admin' && (
                <React.Fragment className="flex justify-start bg-orange-200">
                  <NavLink
                    className="text-orange-700 text-center bg-orange-400 px-4 py-2 "
                    to="/shelterRequests"
                  >
                    Útulky
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
