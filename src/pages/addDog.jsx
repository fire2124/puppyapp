import React, { Component } from "react";
import { addDog } from "../services/dogService";
import { Form, Field } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import FormCheckBox from "../components/common/formCheckBoxField";
import FormOptionField from "../components/common/formOptionField";
import { LookupDataContext } from "../lookupDataProvider";
import ilustracia from "../staticImage/adminShelter/addDog/input_field-profilova_foto.png";
import ilustracia2 from "../staticImage/adminShelter/addDog/input_field-profilova_foto (1).png";

class AddDog extends Component {
  onSubmit = async (values) => {
    let response = await addDog(values);
    if (response != null) {
      this.props.history.push("/dog");
    }
  };

  render() {
    if (this.context.lookupData === null) {
      return "Loading";
    } else {
      const lookupData = this.context.lookupData;
      return (
        <Form
          onSubmit={this.onSubmit}
          // TODO: use initial values when display edit dog profile page

          initialValues={{
            AcuteAdoption: false,
            RequiresExperiencedOwner: false,
            Castrated: false,
            Dewormed: false,
            Chipped: false,
            RequiresGarden: false,
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <label className="text-base font-bold text-2xl ml-10">Pridať psa</label>
              <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                <div className="xl:flex-none xl:w-4/12 xl:m-16 ml-32">
                  <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                    <div className="w-3/12">
                      <img src={ilustracia} alt="Logo" />
                    </div>
                    <div className="w-6/12">
                      <FormTextField name="Name" label="Meno" />
                      <FormCheckBox
                        name="AcuteAdoption"
                        label="Akútna adopcia"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <label className="text-base font-bold">Fotky </label>
                    <div className="flex-none mx-auto ">
                      <img src={ilustracia2} alt="Logo" />
                    </div>
                    <div className="mt-10 font-bold">
                    <FormCheckBox
                      name="RequiresExperiencedOwner"
                      label="Pes si vyžaduje skúseného chovateľa"
                      className="font-bold"
                    />
                    </div>
                   
                  </div>
                  <div className="mt-10">
                    <label className="text-base font-bold">Popis </label>
                    <div className="w-64 min-w-full rounded-full py-2 px-4 py-2 px-4 border-2 border-black inline-block">
                      <Field
                        name="AdditionalInfo"
                        component="textarea"
                        placeholder="Sem zadajte bližšie informácie, ktoré by mal používateľ vediet o danom psovi."
                        className="w-64 min-w-full"
                      />
                    </div>
                    <div>
                    <FormTextField
                      name="PlaceRescued"
                      label="Miesto nájdenia"
                    />
                    </div>
                  </div>
                </div>
                <div className="xl:flex-none xl:w-4/12 xl:m-auto xl:m-16">
                  <FormCheckBox
                    name="RequiresGarden"
                    label="Vyžaduje si záhradu"
                  />

                  <FormOptionField
                    type="radio"
                    options={lookupData.ageOptions}
                    label="Vek"
                    name="AgeId"
                  />
                  <FormOptionField
                    type="radio"
                    options={lookupData.furTypeOptions}
                    label="Dĺžka srsti"
                    name="FurTypeId"
                  />
                  <FormOptionField
                    type="radio"
                    options={lookupData.genderOptions}
                    label="Pohlavie"
                    name="GenderId"
                  />
                  <FormOptionField
                    type="radio"
                    options={lookupData.sizeOptions}
                    label="Výška"
                    name="SizeId"
                  />

                  <FormOptionField
                    type="checkbox"
                    options={lookupData.colorOptions}
                    label="Farba"
                    name="ColorIds"
                  />
                </div>
                <br />
                <div className="xl:flex-none xl:w-4/12 xl:m-auto xl:m-16">
                  <div>
                    <label className="text-base font-bold">
                      Zdravotný stav
                    </label>

                    <div className=" xl:w-4/12 xl:m-auto xl:m-16">
                      <FormCheckBox name="Castrated" label="Kastrovaný" />
                    </div>
                    <div className=" xl:w-4/12 xl:m-auto xl:m-16">
                      <FormCheckBox name="Dewormed" label="Odčervený" />
                    </div>
                    <div className=" xl:w-4/12 xl:m-auto xl:m-16">
                      <FormCheckBox name="Chipped" label="Čipovaný" />
                    </div>
                  </div>

                  <FormOptionField
                    type="radio"
                    options={lookupData.vaccinationTypeOptions}
                    label="Očkovanie"
                    name="VaccinationTypeId"
                  />
                  <FormOptionField
                    type="radio"
                    options={lookupData.attentionRequirementOptions}
                    label="Vyžaduje si pozornosť"
                    name="RequiredAttentionId"
                  />
                  <FormOptionField
                    type="checkbox"
                    options={lookupData.compatibilityOptions}
                    label="Vhodný ku "
                    name="CompatibilityIds"
                  />
                  <FormOptionField
                    type="checkbox"
                    options={lookupData.behaviorTraitOptions}
                    label="Povahové črty"
                    name="BehaviorTraitIds"
                  />
                </div>

                <br />
              </div>

              <button type="submit" disabled={submitting || pristine}>
                Uložiť
              </button>
            </form>
          )}
        />
      );
    }
  }
}
AddDog.contextType = LookupDataContext;
export default AddDog;
