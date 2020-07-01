import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./assets/add.css";
import NotFound from "./pages/notFound";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Login from "./pages/login";
import Logout from "./components/logout";
import RegisterUser from "./pages/registerUser";
import RegisterShelter from "./pages/registerShelter";
import AddDog from "./pages/addDog";
import AllDogs from "./pages/allDogs";
import DogProfile from "./pages/dogProfile";
import SelectRegisterUser from "./pages/SelectRegisterUser";
import EditDogProfile from "./components/editDogProfile";
import UserProfile from "./pages/userProfile";
import EditUserProfile from "./components/editUserProfile";
import ShelterProfile from "./components/shelterProfile";
import EditShelterProfile from "./components/editShelterProfile";
import AdoptionRequests from "./components/adoptionRequests";
import ShelterRequests from "./components/shelterRequests";
import ShelterRequest from "./components/shelterRequest";
import Landing from "./pages/Landing.jsx";
import Popups from "./pages/popups.jsx";
import Popups2 from "./pages/pop.jsx";
import logger from "./services/logService";
import firebase from "firebase";
import { LookupDataProvider } from "./lookupDataProvider";
import { AuthorizationProvider } from "./authorizationProvider";
import HauTU from "./pages/HauTU";
import Article1 from "./pages/articles/article1";
import UpdatePassword from "./pages/updatePassword";
import WorkingPage from "./pages/workingPage";

import ShelterPROFILETOSEEFORYOUSER from "./components/SHELTERPROFILETOSEEFORYOUSER";

logger.init();

let firebaseConfig = {
  apiKey: "AIzaSyBOBZLHcRMlHQyTZADkIwW3Dp9kiuMlXuY",
  authDomain: "puppyapp-2a457.firebaseapp.com",
  databaseURL: "https://puppyapp-2a457.firebaseio.com",
  projectId: "puppyapp-2a457",
  storageBucket: "puppyapp-2a457.appspot.com",
  messagingSenderId: "100087391563",
  appId: "1:100087391563:web:580aeb333f00865a59f4ce",
  measurementId: "G-HQC1SXQYXL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


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
                <Route path="/popups" component={Popups} />
                <Route path="/popups2" component={Popups2} />
                <Route path="/hautu" component={HauTU} />
                <Route path="/article1" component={Article1} />

                <Route path="/login" component={Login} />
                <Route path="/updatePassword" component={UpdatePassword} />
                <Route path="/workingPage" component={WorkingPage} />


                <Route path="/logout" component={Logout} />
                <Route path="/landing" component={Landing} />
                <Route path="/allDogs" component={AllDogs} />
                <Route path="/addDog" component={AddDog} />
                <Route path="/adoptionForm/:dogId" component={AdoptionRequests} />

                <Route path="/dogProfile/:dogId" component={DogProfile} />
                <Route path="/editDogProfile/:dogId" component={EditDogProfile} />
                <Route path="/selectRegister" component={SelectRegisterUser} />
                <Route path="/registerUser" component={RegisterUser} />
                <Route path="/userProfile" component={UserProfile} />
                <Route path="/editUserProfile" component={EditUserProfile} />
                <Route path="/registerShelter" component={RegisterShelter} />
                <Route path="/shelterProfile" component={ShelterProfile} />
                <Route path="/shelterProfileId" component={ShelterPROFILETOSEEFORYOUSER} />

                <Route path="/editShelterProfile" component={EditShelterProfile} />
                <Route path="/adoptionRequests" component={AdoptionRequests} />

                <Route path="/shelterRequests" component={ShelterRequests} />
                <Route path="/shelterRequest/:shelterId" component={ShelterRequest} />

                <Redirect from="/" exact to="/landing" />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </LookupDataProvider>
          </AuthorizationProvider>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
