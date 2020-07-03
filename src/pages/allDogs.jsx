import React, { useContext, useState, useEffect } from "react";
import {
  getAllDogs,
  getFiltered,
  getDogsByUserPreference,
} from "../services/dogService";
import DogsList from "../components/common/dogsList";
import FilterDogs from "../components/filterDogsForm";
import { AuthorizationContext } from "../authorizationProvider";
import PreferencesWizzardForm from "../components/preferencesWizzardForm";
import Popup from "../../src/assets/popup/index.js";
//reactjs-popup

function AllDogs() {
  const authContext = useContext(AuthorizationContext);
  const [dogs, setDogs] = useState([]);
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
    let response = await getAllDogs();
    if (response) {
      const { data } = response;
      setDogs(data.dogs);
    }
    if (authContext.authParams !== null) {
      if (authContext.authParams.loggedIn) {
        if (authContext.authParams.userProfile !== null) {
          if (authContext.authParams.userProfile.isPreferenceSet) {
            let response = await getDogsByUserPreference();
            if (response) {
              const { data } = response;
              setfilteredDogs(data.dogs);
            }
          } else {
            let response = await getAllDogs();
            if (response) {
              const { data } = response;
              setDogs(data.dogs);
            }
          }
        }
      }
    }
  }

  const displayFiltered = async (values) => {
    console.log(values);
    let response = await getFiltered(values);
    if (response.data) {
      setDogs(response.data.dogs);
    }
  };

  const resetFilter = (async) => {
    fetchData();
  };

  if (authContext.authParams.userProfile === null) {
    return "Loading";
  } else {
    return (
      <div className=" xl:mx-auto ">
        <div className="xl:flex xl:flex-no-wrap xl:m-auto">
          <div className="w-2/12 ml-8">
            <FilterDogs
              onDisplayedFiltered={displayFiltered}
              onResetFilter={resetFilter}
            />
          </div>

          <div className="w-10/12 xl:mt-2">
            {authContext.authParams.loggedIn &&
              !authContext.authParams.userProfile.isPreferenceSet && (
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
                        <Popup
                          style={styleObject}
                          className="modalDot"
                          trigger={
                            <button
                              className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
                              onClick={() =>
                                setIsPreferencesWizzardOpen({
                                  isPreferencesWizzardOpen: true,
                                })
                              }
                            >
                              Vyplniť dotazník
                            </button>
                          }
                        > <PreferencesWizzardForm className="w-64 modalDot wiiii"/>
                        </Popup>
                      </div>
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
              <DogsList dogs={dogs} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllDogs;
