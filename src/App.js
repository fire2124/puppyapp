import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import RegisterShelter from "./components/registerShelter";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";
import MoviesTable from "./components/moviesTable";
import DogForm from "./components/dogForm";
import Dogs from "./components/dogs";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    console.log(user);
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/shelter" component={RegisterShelter} />
            {/*<Route path="/movieTable" component={MoviesTable} />*/}
            <Route path="/dog" component={DogForm} />
            {/*<ProtectedRoute path="/dog/:id" component={DogForm} />*/}
            <Route path="/dogs" component={Dogs} />
            <Redirect from="/" exact to="/dogs" />

            {/* <Route
              path="/dogs"
              render={(props) => <Dogs {...props} user={this.state.user} />} //schovanie componentov
            /> */}
            {/*<Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />*/}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
