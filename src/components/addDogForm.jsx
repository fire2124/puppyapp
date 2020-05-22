import React, { Component } from "react";
import { getDogDetail, saveDog } from "../services/dogService";
import { Form, Field } from "react-final-form";
import lookupTablesService from "../services/lookupTablesService";
import DatePicker from "react-datepicker";

class AddDogForm extends Component {
  state = {
    colorOptions: [],
    behaviorOptions: [],
    ageOptions: [],
    breedOptions: [],
    genderOptions: [],
    sizeOptions: [],
    attentionReqirementOptions: [],
    vaccinationOptions: [],
    compatibilityOptions: [],
    furOptions: [],
  };

  async componentDidMount() {
    const colorOptions = await lookupTablesService.getAllColors();
    const behaviorOptions = await lookupTablesService.getAllBehaviorTraits();
    const furOptions = await lookupTablesService.getAllFurTypes();
    const ageOptions = await lookupTablesService.getAllAgeCategories();
    const genderOptions = await lookupTablesService.getAllGenders();
    const sizeOptions = await lookupTablesService.getAllSizeCategories();
    const attentionReqirementOptions = await lookupTablesService.getAllAttentionRequirements();
    const vaccinationOptions = await lookupTablesService.getAllVaccinationTypes();
    const compatibilityOptions = await lookupTablesService.getAllCompatibilities();
    this.setState({
      colorOptions: colorOptions.data,
      behaviorOptions: behaviorOptions.data,
      furOptions: furOptions.data,
      ageOptions: ageOptions.data,
      genderOptions: genderOptions.data,
      sizeOptions: sizeOptions.data,
      attentionReqirementOptions: attentionReqirementOptions.data,
      vaccinationOptions: vaccinationOptions.data,
      compatibilityOptions: compatibilityOptions.data,
    });
    console.log(this.state);
  }

  mapToViewModel(dogModel) {
    const dog = dogModel.dog;
    return dog;
  }

  onSubmit = async values => {
    console.log(values);
    await saveDog(values);

    this.props.history.push("/add");
    window.location = "/";
  }

  DatePickerAdapter = ({ input: { onChange, value }, ...rest }) => (
    <DatePicker selected={value} onChange={date => onChange(date)} {...rest} />
  );

  render() {
    return (
      <Form
        DatePickerAdapter={this.DatePickerAdapter}
        onSubmit={this.onSubmit}
        // initialValues={{ Age: this.state.ageOptions[1],
        //   Gender: this.state.genderOptions[1],
        //   FurType: this.state.furOptions[1],
        //   Size: this.state.sizeOptions[1],
        //   VaccinationType: this.state.vaccinationOptions[1],
        //   RequiredAttention: this.state.attentionReqirementOptions[1] }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Meno</label>
              <Field
                name="Name"
                component="input"
                type="text"
                placeholder="Meno"
              />
            </div>
            <div>
              <label>Akútna adopcia </label>
              <Field name="AcuteAdoption" component="input" type="checkbox" />
            </div>
            <div>
              <label>Pes si vyžaduje skúseného chovateľa </label>
              <Field name="RequiresExperiencedOwner" component="input" type="checkbox" />
            </div>
            <div>
              <label>Popis </label>
              <Field name="AdditionalInfo" component="textarea" placeholder="Sem zadajte bližšie informácie, ktoré by mal používateľ vediet o danom psovi." />
            </div>
            <div>
              <label>Miesto nájdenia </label>
              <Field
                name="PlaceRescued"
                component="input"
                type="text"
                placeholder="Meno"
              />
            </div>
            {/* <div>
              <label>Date: </label>
              <Field
                name="DateRescued"
                dateFormat="yyyy/MM/dd"
                component={DatePickerAdapter}
              />
          </div> */}
    
            <div>
              <label>Vek </label>
              <div>
                {this.state.ageOptions.map(option =>
                  <label>
                    {console.log()}
                    <Field
                      name="AgeId"
                      component="input"
                      type="radio"
                      value={option.id}
                    />{' '}
                    {option.name}
                  </label>
                )}
              </div>
            </div>

            <div>
              <label>Dĺžka srsti </label>
              <div>
                {this.state.furOptions.map(option =>
                  <label>
                    <Field
                      name="FurTypeId"
                      component="input"
                      type="radio"
                      value={option.id}
                    />{' '}
                    {option.name}
                  </label>
                )}
              </div>
            </div>

            <div>
              <label>Pohlavie </label>
              <div>
                {this.state.genderOptions.map(option =>
                  <label>
                    <Field
                      name="GenderId"
                      component="input"
                      type="radio"
                      value={option.id}
                    />{' '}
                    {option.name}
                  </label>
                )}
              </div>
            </div>

            <div>
              <label>Výška </label>
              <div>
                {this.state.sizeOptions.map(option =>
                  <label>
                    <Field
                      name="SizeId"
                      component="input"
                      type="radio"
                      value={option.id}
                    />{' '}
                    {option.name}
                  </label>
                )}
              </div>
            </div>

            <div>
              <label>Očkovanie </label>
              <div>
                {this.state.vaccinationOptions.map(option =>
                  <label>
                    <Field
                      name="VaccinationTypeId"
                      component="input"
                      type="radio"
                      value={option.id}
                    />{' '}
                    {option.name}
                  </label>
                )}
              </div>
            </div>

            <div>
              <label>Vyžaduje si pozornosť </label>
              <div>
                {this.state.attentionReqirementOptions.map(option =>
                  <label>
                    <Field
                      name="RequiredAttentionId"
                      component="input"
                      type="radio"
                      value={option.id}
                    />
                    {option.name}
                  </label>
                )}
              </div>
            </div>

            <div>
              <label>Kastrovaný </label>
              <Field name="Castrated" component="input" type="checkbox" />
            </div>

            <div>
              <label>Odčervený </label>
              <Field name="Dewormed" component="input" type="checkbox" />
            </div>

            <div>
              <label>Čipovaný </label>
              <Field name="Chipped" component="input" type="checkbox" />
            </div>

            <div>
              <label>Vyžaduje si záhradu </label>
              <Field name="RequiresGarden" component="input" type="checkbox" />
            </div>

            <div>
              <label>Farba </label>
              {this.state.colorOptions.map(option =>
                <label>
                  <Field
                    name="ColorIds"
                    component="input"
                    type="checkbox"
                    value={option.id}
                  />{' '}
                  {option.name}
                </label>
              )}
            </div>

            <div>
              <label>Povahové črty </label>
              {this.state.behaviorOptions.map(option =>
                <label>
                  <Field
                    name="BehaviorTraitIds"
                    component="input"
                    type="checkbox"
                    value={option.id}
                  />{' '}
                  {option.name}
                </label>
              )}
            </div>

            <div>
              <label>Vhodný ku </label>
              {this.state.compatibilityOptions.map(option =>
                <label>
                  <Field
                    name="CompatibilityIds"
                    component="input"
                    type="checkbox"
                    value={option.id}
                  />{' '}
                  {option.name}
                </label>
              )}
            </div>
            <button type="submit" disabled={submitting || pristine}>
              Uložiť
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    );
  }
}

export default AddDogForm;
