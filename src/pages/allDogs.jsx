import React, { Component } from "react";
import { getAllDogs } from "../services/dogService";
import DogsList from "../components/common/dogsList";
import { getFiltered } from "../services/dogService";
import FilterDogs from "../components/filterDogsForm";

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

  async displayFiltered(values) {
    let response = await getFiltered(values);
    if (response.data) {
      this.setState({ dogs: response.data.dogs });
    }
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
