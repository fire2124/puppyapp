import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllDogs } from "../services/dogService";
import DogsList from "../components/common/dogsList";

class AllDogs extends Component {
  state = {
    dogs: [],
    currentPage: 1,
    pageSize: 4
  };

  async componentDidMount() {
    const { data } = await getAllDogs();
    this.setState({ dogs: data.dogs });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    if (this.state.dogs.length === 0)
      return <p>Nie sú žiadne psy v databáze.</p>;

    return (
      <div>
        <DogsList dogs={this.state.dogs} />
        <Link
          to="/addDog"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          Pridať psa
          </Link>
      </div>
    );
  }
}

export default AllDogs;
