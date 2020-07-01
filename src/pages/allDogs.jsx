import React, { Component } from "react";
import { getAllDogs, getFiltered, getDogsByUserPreference } from "../services/dogService";
import DogsList from "../components/common/dogsList";
import FilterDogs from "../components/filterDogsForm";
import { Link } from "react-router-dom";
import { AuthorizationContext } from "../authorizationProvider";
import PreferencesWizzardForm from "../components/preferencesWizzardForm";

class AllDogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      isPreferencesWizzardOpen: false
    };
    this.displayFiltered = this.displayFiltered.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  toggleModal(show){
    this.setState({isPreferencesWizzardOpen : show})
  }

  async componentDidMount() {
    this.getAllDogsFromRepository();
  }

  async displayFiltered(values) {
    console.log(values)
    let response = await getFiltered(values);
    if (response.data) {
      this.setState({ dogs: response.data.dogs });
    }
  }

  async resetFilter() {
    this.getAllDogsFromRepository();
  }

  async getAllDogsFromRepository() {
    if (this.context.authParams.userProfile.isPreferenceSet) {
      let response = await getDogsByUserPreference();
      if (response) {
        const { data } = response;
        this.setState({ dogs: data.dogs });
      }
    }
    else {
      let response = await getAllDogs();
      if (response) {
        const { data } = response;
        this.setState({ dogs: data.dogs });
      }
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

          <div className="w-10/12 xl:mt-2">
          {this.context.authParams.loggedIn && !this.context.authParams.userProfile.isPreferenceSet && (
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
                  <button
                className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
                onClick={() => this.setState({isPreferencesWizzardOpen : true})}
                >
                Vyhľadať
                </button>
                  </div>
                 
                </div>
              </div>
            </div>
          )}
            {this.state.isPreferencesWizzardOpen && (
              <div>
                <PreferencesWizzardForm></PreferencesWizzardForm>
              </div>
            )}
            <div>
              <DogsList dogs={this.state.dogs} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AllDogs.contextType = AuthorizationContext;
export default AllDogs;
