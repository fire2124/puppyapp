import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllDogs, deletedog } from "../services/dogService";
import _ from "lodash";
import DogsList from "../components/common/dogsList"

class Dogs extends Component {
  state = {
    dogs: [],
    currentPage: 1,
    pageSize: 4
  };

  async componentDidMount() {
    const { data } = await getAllDogs();
    console.log(data.dogs);
    this.setState({ dogs: data.dogs });
    console.log(this.state);
  }

  handleDelete = async (dog) => {
    const originalDogs = this.state.dogs;
    const dogs = originalDogs.filter((m) => m.id !== dog.id);
    console.log(dog.id);
    console.log(dogs);

    this.setState({ dogs: dogs });

    try {
      await deletedog(dog.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("x");
      toast.error("This dog profile has already been deleted.");

      this.setState({ dogs: originalDogs });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    console.log(this.state);

    const { pageSize, currentPage } = this.state;
    const { user } = this.props;
    if (this.state.dogs.length === 0)
      return <p>Nie sú žiadne psy v databáze.</p>;

    return (
      <div className="row">
        <div className="col">
          <DogsList dogs={this.state.dogs} />;
          <Link
            to="/addDogForm"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            Pridať psa
          </Link>
        </div>
      </div>
    );
  }
}

export default Dogs;
