import React, { Component } from "react";
import { getAllDogs } from "../services/dogService";
import DogsList from "./common/dogsList";
import FilterDogs from "./filterDogsForm";


class AllDogs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      currentPage: 1,
      pageSize: 4
    };
    this.displayFiltered = this.displayFiltered.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  async componentDidMount() {
    this.getAllDogsFromRepository();
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  displayFiltered(dogs){
    this.setState({ dogs: dogs });
  }

  async resetFilter(){
    this.getAllDogsFromRepository();
  }

  async getAllDogsFromRepository(){
    let response = await getAllDogs();
    if(response){
      const { data } = response;
      this.setState({ dogs: data.dogs });
    }
  }

  render() {
    return (
      <div>
        <FilterDogs onDisplayedFiltered = {this.displayFiltered} onResetFilter = {this.resetFilter}/>
        <DogsList dogs={this.state.dogs} />
      </div>
    );
  }
}

export default AllDogs;
