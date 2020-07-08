import React, { useContext } from "react";
import { Field } from "react-final-form";
import Wizard from "./wizzardForm";
import { LookupDataContext } from "../lookupDataProvider";
import FormOptionField from "../components/common/formOptionField";
import FormNumberField from "../components/common/formNumberField"
import { addUserPreference } from "../services/userPreferencesService";
import { AuthorizationContext } from "../authorizationProvider";
import Popup from "reactjs-popup";
import ilustracia from "../staticImage/dot/CLOCK-1.png";
import ilustracia2 from "../staticImage/dot/CLOCK-2.png";
import ilustracia3 from "../staticImage/dot/CLOCK-3.png";
import ilustracia4 from "../staticImage/dot/HOUSE.png";
import ilustracia5 from "../staticImage/dot/FLAT.png";
import ilustracia6 from "../staticImage/dot/TREE.png";
import ilustracia7 from "../staticImage/dot/KID-ICON.png";
import ilustracia8 from "../staticImage/dot/BABY-ICON.png";
import dog from "../staticImage/dot/DOG-MALE.png";
import cat from "../staticImage/dot/CAT.png";
import duck from "../staticImage/dot/DUCK.png";
import bod1 from "../staticImage/dot/01.png";
import bod2 from "../staticImage/dot/02.png";
import NIClass from "../components/common/NIClass"

function PreferencesWizzardForm(props) {

  const authContext = useContext(AuthorizationContext);
  const lookupDataContext = useContext(LookupDataContext);

  const onSubmit = async (values) => {
    let apiRequest = {
      RequiresExperiencedOwner: false,
      CompatibleWithMultiplePeople: false,
      CompatibleWithChildren: false,
      CompatibleWithDogs: false,
      CompatibleWithCats: false,
      CompatibleWithOtherAnimals: false,
      RequiredAttentionId: values.RequiredAttentionId,
      RequiredEnvironmentId: values.RequiredEnvironmentId,
    };
    if (values.numOfPeopleInHousehold > 1) {
      apiRequest.CompatibleWithMultiplePeople = true;
    }
    if (values.numOfChildrenInHousehold > 0) {
      apiRequest.CompatibleWithChildren = true;
    }
    if (values.numOfDogsInHousehold > 0) {
      apiRequest.CompatibleWithDogs = true;
    }
    if (values.numOfCatsInHousehold > 0) {
      apiRequest.CompatibleWithCats = true;
    }
    if (values.numOfOtherAnimalsInHousehold > 0) {
      apiRequest.CompatibleWithOtherAnimals = true;
    }

    let response = await addUserPreference(apiRequest);
    authContext.loadProfileData();
  };

  if (lookupDataContext.lookupData === null) {
    return "Loading";
  } else {
    const lookupData = lookupDataContext.lookupData;

    return (
      <Wizard onSubmit={onSubmit} className="modalDot">
        <Wizard.Page>
          <div>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5">
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
            </div>
            <label className="font-bold text-3xl text-center flex flex-no-wrap mx-auto  justify-center mt-5 mb-10">
              Koľko hodín denne máte <br />
              na starostlivosť o psa?
            </label>
            <div className="xl:flex mb-4">
              <div className="mx-24">
                <FormOptionField
                  type="radio"
                  options={lookupData.attentionRequirementOptions}
                  label=""
                  name="RequiredAttentionId"
                  className2="ml-20"
                />
              </div>
            </div>
            <div className="xl:flex xl:flex-no-wrap xl:justify-between mt-5">
              <div className="xl:ml-48">
                <img src={ilustracia} alt="Logo" width="auto" />
              </div>
              <div className="">
                <img src={ilustracia2} alt="Logo" width="auto" />
              </div>
              <div className="xl:mr-48">
                <img src={ilustracia3} alt="Logo" width="auto" />
              </div>
            </div>
          </div>
        </Wizard.Page>
        <Wizard.Page>
          <div>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5">
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
            </div>
            <label className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-5 mb-10">
              Psík bude bývať v:
            </label>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mb-5">
              <div className="mt-10 mr-20">
                <FormOptionField
                  type="radio"
                  options={lookupData.requiredEnvironmentOptions}
                  label=""
                  name="RequiredEnvironmentId"
                  className2="ml-20"
                />
              </div>
            </div>
            <div className="xl:flex xl:flex-no-wrap xl:justify-between mt-5">
              <div className="xl:ml-48">
                <img src={ilustracia4} alt="Logo" width="auto" />
              </div>
              <div className="">
                <img src={ilustracia5} alt="Logo" width="auto" />
              </div>
              <div className="xl:mr-48">
                <img src={ilustracia6} alt="Logo" width="auto" />
              </div>
            </div>
          </div>
        </Wizard.Page>
        <Wizard.Page>
          <div>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5">
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
            </div>
            <label className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-5 mb-10">
              Koľko členov má vaša domácnosť?
            </label>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5">
              <img src={ilustracia7} alt="Logo" width="auto" />
            </div>
            <FormNumberField/>    
          </div>
        </Wizard.Page>
        <Wizard.Page>
          <div>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5">
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
            </div>
            <label className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-5 mb-10 text-center">
              Koľko detí do 6 rokov žije <br />
              vo Vašej domácnosti?
            </label>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5">
              <img src={ilustracia8} alt="Logo" width="auto" />
            </div>
            <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5 mt-5">
              <div className="justify-between input-group plus-minus-input">
                <div className="input-group-button">
                  {/* <button
                    type="button"
                    className="button hollow circle flex1"
                    data-quantity="minus"
                    data-field="quantity"
                  >
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </button> */}
                </div>
              </div>
              <div className="justify-between">
                <Field
                  name="numOfChildrenInHousehold"
                  component="input"
                  type="number"
                  step="1"
                  min="0"
                  className="w-10 border-b border-black text-center"
                />
              </div>
                <NIClass/>
              <div className="justify-between input-group plus-minus-input">
                <div className="input-group-button flex1">
                  {/* <button
                    type="button"
                    className="button hollow circle"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </Wizard.Page>
        <Wizard.Page>
          <div>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5">
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod2} alt="Logo" width="auto" className="ml-2" />
            </div>
            <label className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-5 mb-10">
              Máte doma aj iné zvieratá?
            </label>
            <div className="xl:flex xl:flex-no-wrap xl:mx-auto xl:justify-between xl:mb-5 text-center">
              <div className="w-1/3">
                <label>Pes</label>
                <img
                  src={dog}
                  alt="Logo"
                  width="auto"
                  className="ml-24 xl:justify-center"
                />
                <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5 mt-5">
                  <div className="justify-between input-group plus-minus-input">
                    <div className="input-group-button">
                      {/* <button
                        type="button"
                        className="button hollow circle flex1"
                        data-quantity="minus"
                        data-field="quantity"
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button> */}
                    </div>
                  </div>
                  <div className="justify-between">
                    <Field
                      name="numOfDogsInHousehold"
                      component="input"
                      type="number"
                      step="1"
                      min="0"
                      className="w-10 border-b border-black text-center"
                    />
                  </div>
                  <div className="justify-between input-group plus-minus-input">
                    <div className="input-group-button flex1">
                      {/* <button
                        type="button"
                        className="button hollow circle"
                        data-quantity="plus"
                        data-field="quantity"
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 ">
                <label>Mačka</label>
                <img
                  src={cat}
                  alt="Logo"
                  width="auto"
                  className="ml-24 xl:justify-center"
                />
                <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5 mt-5">
                  <div className="justify-between input-group plus-minus-input">
                    <div className="input-group-button">
                      {/* <button
                        type="button"
                        className="button hollow circle flex1"
                        data-quantity="minus"
                        data-field="quantity"
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button> */}
                    </div>
                  </div>
                  <div className="justify-between">
                    <Field
                      name="numOfCatsInHousehold"
                      component="input"
                      type="number"
                      step="1"
                      min="0"
                      className="w-10 border-b border-black text-center"
                    />
                  </div>
                  <div className="justify-between input-group plus-minus-input">
                    <div className="input-group-button flex1">
                      {/* <button
                        type="button"
                        className="button hollow circle"
                        data-quantity="plus"
                        data-field="quantity"
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <label>Iné</label>
                <img
                  src={duck}
                  alt="Logo"
                  width="auto"
                  className="ml-24 xl:justify-center"
                />
                <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5 mt-5">
                  <div className="justify-between input-group plus-minus-input">
                    <div className="input-group-button">
                      {/* <button
                        type="button"
                        className="button hollow circle flex1"
                        data-quantity="minus"
                        data-field="quantity"
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button> */}
                    </div>
                  </div>
                  <div className="justify-between">
                    <Field
                      name="numOfOtherAnimalsInHousehold"
                      component="input"
                      type="number"
                      step="1"
                      min="0"
                      className="w-10 border-b border-black text-center"
                    />
                  </div>
                  <div className="justify-between input-group plus-minus-input">
                    <div className="input-group-button flex1">
                      {/* <button
                        type="button"
                        className="button hollow circle"
                        data-quantity="plus"
                        data-field="quantity"
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wizard.Page>
        <Wizard.Page>
          <div>
            <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5">
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
              <img src={bod1} alt="Logo" width="auto" className="ml-2" />
            </div>
            <label className="font-bold text-3xl flex flex-no-wrap mx-auto  justify-center mt-5 mb-10 text-center">
              Koľko máte skúseností <br />
              so starostlivosťou o psíka?
            </label>
            <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-between mb-10">
              <div className="ml-40">
                <label>
                  <Field
                    name="RequiresExperiencedOwner"
                    component="input"
                    type="radio"
                    value={false}
                  />{" "}
                  Začiatočník
                </label>
              </div>
              <div>
                <label>
                  <Field
                    name="RequiresExperiencedOwner"
                    component="input"
                    type="radio"
                    value={true}
                  />{" "}
                  Skúsený
                </label>
              </div>
              <div className="mr-40">
                <label>
                  <Field
                    name="RequiresExperiencedOwner"
                    component="input"
                    type="radio"
                    value={true}
                  />{" "}
                  Chovateľ
                </label>
              </div>
            </div>
          </div>
        </Wizard.Page>
      </Wizard>
    );
  }
}

export default PreferencesWizzardForm;
