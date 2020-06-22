import React, { Component } from "react";
import { addDog } from "../services/dogService";
import { Form, Field } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import FormCheckBox from "../components/common/formCheckBoxField";
import FormOptionField from "../components/common/formOptionField";
import { LookupDataContext } from "../lookupDataProvider";
import ilustracia from "../staticImage/adminShelter/addDog/input_field-profilova_foto.png";
import ilustracia2 from "../staticImage/adminShelter/addDog/input_field-profilova_foto (1).png";
import { NavLink } from "react-router-dom";

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
              <label className="text-base font-bold text-2xl ml-10">
                Pridať psa
              </label>
              <div className="xl:flex xl:flex-no-wrap back ml-10 mr-10">
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
                    <div className="mt-10">
                      <FormTextField
                        name="PlaceRescued"
                        label="Miesto nájdenia"
                      />
                    </div>
                    <div>
                      <FormCheckBox
                        name="RequiresGarden"
                        label="Vyžaduje si záhradu"
                      />
                    </div>
                  </div>
                </div>
                <div className="xl:flex-none xl:w-4/12 xl:m-auto xl:m-16">
                  <div>
                    <FormOptionField
                      type="radio"
                      options={lookupData.furTypeOptions}
                      label="Dĺžka srsti"
                      name="FurTypeId"
                    />
                  </div>
                  <div className="mt-10">
                    <FormOptionField
                      type="checkbox"
                      options={lookupData.colorOptions}
                      label="Farba"
                      name="ColorIds"
                    />
                  </div>
                  <div className="mt-10">
                    <FormOptionField
                      type="radio"
                      options={lookupData.genderOptions}
                      label="Pohlavie"
                      name="GenderId"
                    />
                  </div>

                  <div className="mt-10">
                    <FormOptionField
                      type="radio"
                      options={lookupData.ageOptions}
                      label="Vek"
                      name="AgeId"
                    />
                  </div>
                  <div className="mt-10">
                    <FormOptionField
                      type="radio"
                      options={lookupData.sizeOptions}
                      label="Výška"
                      name="SizeId"
                    />
                  </div>
                </div>
                <br />
                <div className="xl:flex-none xl:w-4/12 xl:m-auto xl:m-16">
                  <div>
                    <label className="text-base font-bold mt-10">
                      Zdravotný stav
                    </label>
                    <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                      <div className="justify-start">
                        <FormCheckBox name="Castrated" label="Kastrovaný" />
                      </div>
                      <div className="justify-start ml-10">
                        <FormCheckBox name="Dewormed" label="Odčervený" />
                      </div>
                      <div className="justify-start ml-10">
                        <FormCheckBox name="Chipped" label="Čipovaný" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-10">
                      <FormOptionField
                        type="radio"
                        options={lookupData.vaccinationTypeOptions}
                        label="Očkovanie"
                        name="VaccinationTypeId"
                      />
                    </div>
                    <div className="mt-10">
                      <FormOptionField
                        type="radio"
                        options={lookupData.attentionRequirementOptions}
                        label="Vyžaduje si pozornosť"
                        name="RequiredAttentionId"
                      />
                    </div>
                  </div>
                  <div className="mr-10">
                    <div className="mt-10">
                      <FormOptionField
                        type="checkbox"
                        options={lookupData.compatibilityOptions}
                        label="Pes je vhodný ku "
                        name="CompatibilityIds"
                      />
                    </div>
                    <div className="mt-10 mr-10">
                      <FormOptionField
                        type="checkbox"
                        options={lookupData.behaviorTraitOptions}
                        label="Povaha psa"
                        name="BehaviorTraitIds"
                      />
                    </div>
                  </div>
                </div>

                <br />
              </div>
              <div className=" xl:py-5 xl:px-5 xl:flex justify-center">
                <div>
                  <NavLink
                    className="text-orange font-semibold text-center bg-orange-400 px-4 py-2 m-2 rounded-full py-2 px-4 py-2 px-4 border-2 border-orange inline-block "
                    to="/"
                  >
                    Zrušiť
                  </NavLink>
                  <button
                    type="submit"
                    disabled={submitting || pristine}
                    className="text-white font-semibold text-center bg-gray px-4 py-2 m-2 rounded-full py-2 px-4 inline-block"
                  >
                    Uložiť
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      );
    }
  }
}
AddDog.contextType = LookupDataContext;
export default AddDog;
