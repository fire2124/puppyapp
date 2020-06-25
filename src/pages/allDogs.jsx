import React, { Component } from "react";
import { getAllDogs } from "../services/dogService";
import DogsList from "../components/common/dogsList";
import { getFiltered } from "../services/dogService";
import FilterDogs from "../components/filterDogsForm";
import { Link } from "react-router-dom";

class AllDogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      currentPage: 1,
      pageSize: 4,
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

  async resetFilter() {
    this.getAllDogsFromRepository();
  }

  async getAllDogsFromRepository() {
    let response = await getAllDogs();
    if (response) {
      const { data } = response;
      this.setState({ dogs: data.dogs });
    }
  }

  render() {
    return (
      <div className=" xl:mx-auto ">
        <div className="xl:flex xl:flex-no-wrap xl:m-auto">
          <div className="w-2/12 ml-8">
            <FilterDogs
              onDisplayedFiltered={this.displayFiltered}
              onResetFilter={this.resetFilter}
            />
          </div>

          <div className="w-10/12 ">
            <div className="backgroundAllDogs">
              <div className="xl:flex xl:flex-no-wrap xl:m-auto background4">
                <div className=" ml-64 mt-16">
                  <h1 className="xl:text-left text-4xl font-bold text-white  ">
                    Chceme Vám pomôcť nájsť vhodného psíka
                    <br /> práve pre Vašu rodinu
                  </h1>

                  <p className="xl:text-lg text-white xl:mr-40 xl:mt-5">
                    Máme pre Vás dotazník, ktorý Vám môže pomôcť
                  </p>
                  <div className="mt-5">
                  <Link
                    className="text-white font-semibold xl:text-center bg-orange px-8 py-2 m-2 rounded-full py-2 px-8"
                    to="/popups"
                  >
                    Vyplniť dotazník
                  </Link>
                  </div>
                 
                </div>
              </div>
            </div>
            <div>
              <DogsList dogs={this.state.dogs} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllDogs;
