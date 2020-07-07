import React, { useContext, useState, useEffect } from "react";
import {
  getAllShelters
} from "../services/shelterService";
import DogsList from "../components/common/dogsList";
import FilterDogs from "../components/filterDogsForm";
import { AuthorizationContext } from "../authorizationProvider";
import PreferencesWizzardForm from "../components/preferencesWizzardForm";
import Popup from "../../src/assets/popup/index.js";
import ShelterList from "./common/shelterList";
//reactjs-popup

function AllSheters() {
  const authContext = useContext(AuthorizationContext);
  const [shelters, setDogs] = useState([]);
  const [filteredDogs, setfilteredDogs] = useState([]);
  const [isPreferencesWizzardOpen, setIsPreferencesWizzardOpen] = useState(
    false
  );

  const styleObject = {
    "font-size" : "10px",
    "height" : "100px",
    "width" : "500px"
}

  useEffect(() => {
    fetchData();
  }, [authContext.authParams]);

  useEffect(() => {
    console.log("component mounted");
    fetchData();
  }, []);

  async function fetchData() {
    let response = await getAllShelters();
    if (response) {
      const { data } = response;
      console.log(data.shelters);
      
      setDogs(data.shelters);
    }
    // if (authContext.authParams !== null) {
    //   if (authContext.authParams.loggedIn) {
    //     if (authContext.authParams.userProfile !== null) {
    //       if (authContext.authParams.userProfile.isPreferenceSet) {
    //         let response = await getDogsByUserPreference();
    //         if (response) {
    //           const { data } = response;
    //           setfilteredDogs(data.dogs);
    //         }
    //       } else {
    //         let response = await getAllDogs();
    //         if (response) {
    //           const { data } = response;
    //           setDogs(data.dogs);
    //         }
    //       }
    //     }
    //   }
    // }
  }



  const resetFilter = (async) => {
    fetchData();
  };

  if (authContext.authParams.userProfile === null) {
    return "Loading";
  } else {
    return (
      <div className=" xl:mx-auto ">
        <div className="xl:flex xl:flex-no-wrap xl:m-auto ">
        
          <div className="w-2/12 ml-8 ">
            {/* <FilterDogs
              onDisplayedFiltered={displayFiltered}
              onResetFilter={resetFilter}
            /> */}
          </div>

          <div className="w-10/12 xl:mt-2 ">
            {authContext.authParams.loggedIn &&
              !authContext.authParams.userProfile.isPreferenceSet && (
                <div className="backgroundAllDogs">
                  <div className="xl:flex xl:flex-no-wrap xl:m-auto ">
                    <div className=" ml-64 mt-16">
                      <h1 className="xl:text-left text-4xl font-bold text-white  ">
                      Útulky
                      </h1>

                      <p className="xl:text-lg text-white xl:mr-40 xl:mt-5">
                      Zoznam útulkov 
                      </p>
                    </div>
                  </div>
                </div>
              )}
            {filteredDogs.length === 0 &&
              authContext.authParams.loggedIn &&
              authContext.authParams.userProfile.isPreferenceSet && (
                <div>
                  Je nám ľúto ale v databáze sa momentálne nenachádzajú žiadne
                  psíky, ktoré by vyhovovali vašim kritériam.
                </div>
              )}
            <div>
              <ShelterList shelters={shelters} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllSheters;
