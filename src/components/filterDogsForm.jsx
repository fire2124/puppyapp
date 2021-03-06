import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-final-form";
import FormCheckBox from "./common/formCheckBoxField";
import SelectOptionField from "./common/selectOptionField";

import FormOptionField from "./common/formOptionField";
import { LookupDataContext } from "../lookupDataProvider";

function FilterDogs(props) {
  const [lookupData, setLookupData] = useState(null);
  const lookupDataContext = useContext(LookupDataContext);
  console.log(lookupData);

  useEffect(() => {
    setLookupData(lookupDataContext.lookupData);
  }, [lookupDataContext.lookupData]);

  if (lookupData === null) {
    return "Loading";
  } else {
    return (
      <Form
        onSubmit={(values) => {
          props.onDisplayedFiltered(values);
        }}
        initialValues={{
          Castrated: false,
          Dewormed: false,
          Chipped: false,
        }}
        render={({ handleSubmit, submitting, pristine, form }) => (
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="xl:mr-10">
                <FormOptionField
                  type="checkbox"
                  options={lookupData.colorOptions}
                  label="Farba srsti"
                  name="ColorIds"
                  className2="mt-2 w-1/2"
                />
              </div>
              <div className="mt-5 xl:mr-10">
                <FormOptionField
                  type="checkbox"
                  options={lookupData.furTypeOptions}
                  label="Dĺžka srsti"
                  name="FurTypeId"
                  className2="mt-2 w-1/2"
                />
              </div>
              <div className="mt-5 xl:mr-10">
                <SelectOptionField
                  type="select"
                  label="Rasa"
                  options={lookupData.breedOptions}
                  name="BreedIds"
                  placeholder="jazvečík"
                />
              </div>
              <div className="mt-5 xl:mr-10">
                <FormOptionField
                  type="radio"
                  options={lookupData.genderOptions}
                  label="Pohlavie"
                  name="GenderId"
                  className2="mt-2 w-1/2"
                />
              </div>        
              <div className="mt-5 xl:mr-10">
                <FormOptionField
                  type="checkbox"
                  options={lookupData.sizeOptions}
                  label="Veľkosť"
                  name="SizeIds"
                  className2="mt-2 w-1/2"
                />
              </div>
              <div className="mt-5 xl:mr-10">
                <FormOptionField
                  type="checkbox"
                  options={lookupData.vaccinationTypeOptions}
                  label="Očkovaný"
                  name="VaccinationIds"
                  className2="mt-2 w-1/2"
                />
              </div>           
              <div className="mt-5 ">
                <FormCheckBox name="Castrated" label="Kastrovaný" />
              </div>
              <div className="mt-5">
                <FormCheckBox name="Dewormed" label="Odčervený" />
              </div>
              <div className="mt-5">
                <FormCheckBox name="Chipped" label="Čipovaný" />
              </div>
            </div>
            <div className="mt-10 xl:mr-10">
              <button
                className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
                type="submit"
                disabled={submitting || pristine}
              >
                Vyhľadať
              </button>
            </div>
            <div className="mt-3">
              <button
                className="text-orange font-semibold font-sm text-center bg-orange-400 inline-block "
                type="button"
                onClick={() => {
                  form.reset();
                  props.onResetFilter();
                }}
                disabled={submitting || pristine}
              >
                Vynulovať filter
              </button>
            </div>
          </form>
        )}
      />
    );
  }
}
export default FilterDogs;
