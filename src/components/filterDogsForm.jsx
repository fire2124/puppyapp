import React, { useContext, useEffect, useState } from "react";
import { getFiltered } from "../services/dogService";
import { Form } from "react-final-form";
import FormCheckBox from "./common/formCheckBoxField"
import FormOptionField from "./common/formOptionField"
import { LookupDataContext } from "../lookupDataProvider"

function FilterDogs(props) {

  const [lookupData, setLookupData] = useState(null);
  const lookupDataContext = useContext(LookupDataContext);

  useEffect(() => {
    setLookupData(lookupDataContext.lookupData);
  }, [lookupDataContext.lookupData]);

  const onSubmit = (values) => {
    console.log(values);

    async function fetchData() {
      let response = await getFiltered(values);
      console.log(response);
      if (response.data) {
        props.onDisplayedFiltered(response.data.dogs);
      }
    }
    fetchData();
  }

  const onResetFilter = () => {
    props.onResetFilter();
  }

  if (lookupData === null) {
    return ('Loading');
  } else {
    return (
      <LookupDataContext.Consumer>
        {({ lookupData }) => (
          <Form
            onSubmit={onSubmit}
            initialValues={{
              Castrated: false,
              Dewormed: false,
              Chipped: false
            }}
            render={({ handleSubmit, submitting, pristine, values, form }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <FormCheckBox name='Castrated' label='Kastrovaný' />
                  <FormCheckBox name='Dewormed' label='Odčervený' />
                  <FormCheckBox name='Chipped' label='Čipovaný' />

                  <FormOptionField type="radio" options={lookupData.genderOptions} label='Pohlavie' name='GenderId' />
                  <FormOptionField type="radio" options={lookupData.vaccinationTypeOptions} label='Očkovanie' name='VaccinationTypeId' />

                  <FormOptionField type="checkbox" options={lookupData.ageOptions} label='Vek' name='AgeIds' />
                  <FormOptionField type="checkbox" options={lookupData.sizeOptions} label='Výška' name='SizeIds' />
                  <FormOptionField type="checkbox" options={lookupData.colorOptions} label='Farba' name='ColorIds' />
                  <FormOptionField type="checkbox" options={lookupData.behaviorTraitOptions} label='Povahové črty' name='BehaviorIds' />
                </div>

                <button type="submit" disabled={submitting || pristine}>
                  Filtrovať
                </button>
                <button
                  type="button"
                  onClick={() =>{ form.reset(); onResetFilter();}}
                  disabled={submitting || pristine}
                >
                  Vymazať filter
                </button>
              </form>
            )}
          />
        )}
      </LookupDataContext.Consumer>
    )
  }
}
export default FilterDogs;