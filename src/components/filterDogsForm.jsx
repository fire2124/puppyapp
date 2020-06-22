import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-final-form";
import FormCheckBox from "./common/formCheckBoxField";
import FormOptionField from "./common/formOptionField";
import { LookupDataContext } from "../lookupDataProvider";

function FilterDogs(props) {
  const [lookupData, setLookupData] = useState(null);
  const lookupDataContext = useContext(LookupDataContext);

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
            <div className="ml-5">
              <div>
                <FormOptionField
                  type="checkbox"
                  options={lookupData.colorOptions}
                  label="Farba srsti"
                  name="ColorIds"
                />
              </div>
              <div className="mt-5">
                <FormOptionField
                  type="radio"
                  options={lookupData.genderOptions}
                  label="Pohlavie"
                  name="GenderId"
                />
              </div>
              <div className="mt-5">
                <FormOptionField
                  type="checkbox"
                  options={lookupData.ageOptions}
                  label="Vek"
                  name="AgeIds"
                />
              </div>
              <div className="mt-5">
                <FormOptionField
                  type="checkbox"
                  options={lookupData.sizeOptions}
                  label="Výška"
                  name="SizeIds"
                />
              </div>
              <div className="mt-5">
                <FormOptionField
                  type="checkbox"
                  options={lookupData.behaviorTraitOptions}
                  label="Povahové črty"
                  name="BehaviorIds"
                />
              </div>
              <div className="mt-5">
                <FormCheckBox name="Castrated" label="Kastrovaný" />
              </div>
              <div className="mt-5">
                <FormCheckBox name="Dewormed" label="Odčervený" />
              </div>
              <div className="mt-5">
                <FormCheckBox name="Chipped" label="Čipovaný" />
              </div>
            </div>
            <div>
              <button
                className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
                type="submit"
                disabled={submitting || pristine}
              >
                Vyhľadať
              </button>
            </div>
            <div>
              <button
                className="text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 inline-block "
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
