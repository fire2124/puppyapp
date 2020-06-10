import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Login from "./components/login";
import Logout from "./components/logout";
import RegisterUser from "./components/registerUser";
import RegisterShelter from "./components/registerShelter";
import AddDog from "./components/addDog";
import AllDogs from "./components/allDogs";
import DogProfile from "./components/dogProfile";

import EditDogProfile from "./components/editDogProfile";
import UserProfile from "./components/userProfile";
import EditUserProfile from "./components/editUserProfile";
import ShelterProfile from "./components/shelterProfile";
import EditShelterProfile from "./components/editShelterProfile";
import AdoptionRequests from "./components/adoptionRequests";
import AdminProfile from "./components/adminProfile";
import EditAdminProfile from "./components/editAdminProfile";
import ShelterRequests from "./components/shelterRequests";
import Landing from "./pages/Landing";

import { LookupDataProvider } from "./lookupDataProvider";
import { AuthorizationProvider } from "./authorizationProvider";

class App extends Component {

  render() {
    return (

      <React.Fragment>
        <ToastContainer />
        <main>
          <AuthorizationProvider>
            <LookupDataProvider>
              <NavBar />
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/landing" component={Landing}/>

                <Route path="/dog" component={AllDogs} />
                <Route path="/addDog" component={AddDog} />
                <Route path="/dogProfile/:dogId" component={DogProfile} />
                <Route path="/editDogProfile/:dogId" component={EditDogProfile} />

                <Route path="/registerUser" component={RegisterUser} />
                <Route path="/userProfile" component={UserProfile} />
                <Route path="/editUserProfile" component={EditUserProfile} />

                <Route path="/registerShelter" component={RegisterShelter} />
                <Route path="/shelterProfile" component={ShelterProfile} />
                <Route path="/editShelterProfile" component={EditShelterProfile} />
                <Route path="/adoptionRequests" component={AdoptionRequests} />

                <Route path="/adminProfile" component={AdminProfile} />
                <Route path="/editAdminProfile" component={EditAdminProfile} />
                <Route path="/shelterRequests" component={ShelterRequests} />

                <Redirect from="/" exact to="/landing" />
                <Route component={NotFound} />
              </Switch>
            </LookupDataProvider>
          </AuthorizationProvider>
        </main>
      </React.Fragment>

    );
  }
}

export default App;
