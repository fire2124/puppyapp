import React, { Component } from "react";
import { getShelterApplications } from "../services/shelterService";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ShelterRequests extends Component {
  state = {
    pendingRegistrations: null
  }

  async componentDidMount() {
    let response = await getShelterApplications();
    if (response.data) {
      this.setState({ pendingRegistrations: response.data.registrations });
    }
  }

  render() {
    if (this.state.pendingRegistrations === null) {
      return ('Loading');
    } else {

      return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Meno útulku</TableCell>
                <TableCell align="right">Mesto</TableCell>
                <TableCell align="right">Adresa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.pendingRegistrations.map(pendingRegistration => (
                
                <TableRow component={Link} to={`/shelterRequest/${pendingRegistration.shelter.id}`} key={pendingRegistration.shelter.id}>
                  <TableCell component="th" scope="row">
                    {pendingRegistration.shelter.name}
                  </TableCell>
                  <TableCell align="right">{pendingRegistration.shelter.city}</TableCell>
                  <TableCell align="right">{pendingRegistration.shelter.street}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  }
}
export default ShelterRequests;
