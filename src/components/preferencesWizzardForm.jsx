import React, { Component } from "react";
import { render } from 'react-dom'
import Styles from './wizzardFormStyles'
import { Field } from 'react-final-form'
import Wizard from './wizzardForm'
import { LookupDataContext } from "../lookupDataProvider";
import FormTextField from "../components/common/formTextField";
import FormCheckBox from "../components/common/formCheckBoxField";
import FormOptionField from "../components/common/formOptionField";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const Error = ({ name }) => (
    <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
            touched && error ? <span>{error}</span> : null
        }
    />
)

const required = value => (value ? undefined : 'Required')

class PreferencesWizzardForm extends Component {
    render() {
        if (this.context.lookupData === null) {
            return "Loading";
        } else {
            const lookupData = this.context.lookupData;
            console.log(lookupData);

            return (
                <Styles>
                    <h1>React Final Form Example</h1>
                    <Wizard
                        initialValues={{ employed: true, stooge: 'larry' }}
                        onSubmit={this.onSubmit}
                    >
                        <Wizard.Page>
                            <div>
                                <label>Koľko hodín denne máte na starostlivosť o psa?</label>
                                <div className=" mr-64">
                                    <FormOptionField
                                        type="radio"
                                        options={lookupData.furTypeOptions}
                                        label="Dĺžka srsti"
                                        name="FurTypeId"
                                    />
                                </div>
                            </div>
                        </Wizard.Page>
                        <Wizard.Page>
                            <div>
                                <label>Koľko hodín denne máte na starostlivosť o psa?</label>
                                <div className=" mr-64">
                                    <FormOptionField
                                        type="radio"
                                        options={lookupData.furTypeOptions}
                                        label="Dĺžka srsti"
                                        name="FurTypeId"
                                    />
                                </div>
                            </div>
                        </Wizard.Page>
                        <Wizard.Page>
                            <Field
                                name="stooge"
                                component="input"
                                type="number"
                                value="curly"
                                step="1"
                            />
                        </Wizard.Page>
                        <Wizard.Page>
                            <Field
                                name="stooge"
                                component="input"
                                type="number"
                                value="curly"
                                step="1"
                            />
                        </Wizard.Page>
                        <Wizard.Page>
                            <Field
                                name="stooge"
                                component="input"
                                type="number"
                                value="curly"
                                step="1"
                            />
                            <Field
                                name="stooge"
                                component="input"
                                type="number"
                                value="curly"
                                step="1"
                            />
                            <Field
                                name="stooge"
                                component="input"
                                type="number"
                                value="curly"
                                step="1"
                            />
                        </Wizard.Page>
                        <Wizard.Page>
                            <div>
                                <label>Koľko hodín denne máte na starostlivosť o psa?</label>
                                <div className=" mr-64">
                                    <FormOptionField
                                        type="radio"
                                        options={lookupData.furTypeOptions}
                                        label="Dĺžka srsti"
                                        name="FurTypeId"
                                    />
                                </div>
                            </div>
                        </Wizard.Page>
                    </Wizard>
                </Styles>
            );
        }
    }
}
PreferencesWizzardForm.contextType = LookupDataContext;
export default PreferencesWizzardForm;
