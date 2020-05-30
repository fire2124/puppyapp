import { Component } from "react";
import { AuthorizationContext } from "../authorizationProvider";

class Logout extends Component {
  async componentDidMount() {
    await this.context.logout();
  }
  render() {
    return null;
  }
}
Logout.contextType = AuthorizationContext;
export default Logout;
