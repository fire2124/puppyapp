import React, { Component } from "react";
import { saveDog } from "../services/dogService";
import { Form, Field } from "react-final-form";
import DatePicker from "react-datepicker";
import FormTextField from "../components/common/formTextField"
import FormCheckBox from "./common/formCheckBoxField"
import FormOptionField from "./common/formOptionField"
import { LookupDataContext } from "../lookupDataProvider"

class AddDogForm extends Component {
  state = {
    lookupData: null
  };

  async componentWillMount() {
    console.log(this.context.lookupData)
    this.setState({
      lookupData: this.context.lookupData
    });
  }

  onSubmit = async values => {
    await saveDog(values);

    this.props.history.push("/add");
    window.location = "/";
  }

  DatePickerAdapter = ({ input: { onChange, value }, ...rest }) => (
    <DatePicker selected={value} onChange={date => onChange(date)} {...rest} />
  );

  render() {
    return (
      <React.Fragment>
        <Form
          DatePickerAdapter={this.DatePickerAdapter}
          onSubmit={this.onSubmit}
          // TODO: use initial values when display edit dog profile page

          initialValues={{
            AcuteAdoption: false,
            RequiresExperiencedOwner: false,
            Castrated: false,
            Dewormed: false,
            Chipped: false,
            RequiresGarden: false
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <FormTextField name={'Name'} label={'Meno'} />
                <FormTextField name={'PlaceRescued'} label={'Miesto nájdenia'} />

                <FormCheckBox name={'AcuteAdoption'} label={'Akútna adopcia'} />
                <FormCheckBox name={'RequiresExperiencedOwner'} label={'Pes si vyžaduje skúseného chovateľa'} />
                <FormCheckBox name={'Castrated'} label={'Kastrovaný'} />
                <FormCheckBox name={'Dewormed'} label={'Odčervený'} />
                <FormCheckBox name={'Chipped'} label={'Čipovaný'} />
                <FormCheckBox name={'RequiresGarden'} label={'Vyžaduje si záhradu'} />

                <FormOptionField type={"radio"} options={this.state.lookupData.ageOptions} label={'Vek'} name={'AgeId'} />
                <FormOptionField type={"radio"} options={this.state.lookupData.furTypeOptions} label={'Dĺžka srsti'} name={'FurTypeId'} />
                <FormOptionField type={"radio"} options={this.state.lookupData.genderOptions} label={'Pohlavie'} name={'GenderId'} />
                <FormOptionField type={"radio"} options={this.state.lookupData.sizeOptions} label={'Výška'} name={'SizeId'} />
                <FormOptionField type={"radio"} options={this.state.lookupData.vaccinationTypeOptions} label={'Očkovanie'} name={'VaccinationTypeId'} />
                <FormOptionField type={"radio"} options={this.state.lookupData.attentionRequirementOptions} label={'Vyžaduje si pozornosť'} name={'RequiredAttentionId'} />

                <FormOptionField type={"checkbox"} options={this.state.lookupData.colorOptions} label={'Farba'} name={'ColorIds'} />
                <FormOptionField type={"checkbox"} options={this.state.lookupData.behaviorTraitOptions} label={'Povahové črty'} name={'BehaviorTraitIds'} />
                <FormOptionField type={"checkbox"} options={this.state.lookupData.compatibilityOptions} label={'Vhodný ku '} name={'CompatibilityIds'} />

                <div>
                  <label>Popis </label>
                  <Field name="AdditionalInfo" component="textarea" placeholder="Sem zadajte bližšie informácie, ktoré by mal používateľ vediet o danom psovi." />
                </div>
              </div>


              <button type="submit" disabled={submitting || pristine}>
                Uložiť
            </button>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </React.Fragment>
    );
  }
}
AddDogForm.contextType = LookupDataContext;
export default AddDogForm;
