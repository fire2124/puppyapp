import React, { useContext } from "react";
import { Field } from 'react-final-form'
import Wizard from './wizzardForm'
import { LookupDataContext } from "../lookupDataProvider";
import FormOptionField from "../components/common/formOptionField";
import { addUserPreference } from "../services/userPreferencesService";
import { AuthorizationContext } from "../authorizationProvider";

function PreferencesWizzardForm(props) {
    const authContext = useContext(AuthorizationContext);
    const lookupDataContext = useContext(LookupDataContext);

    const onSubmit = async values => {
        let apiRequest =
        {
            RequiresExperiencedOwner: false,
            CompatibleWithMultiplePeople: false,
            CompatibleWithChildren: false,
            CompatibleWithDogs: false,
            CompatibleWithCats: false,
            CompatibleWithOtherAnimals: false,
            RequiredAttentionId: values.RequiredAttentionId,
            RequiredEnvironmentId: values.RequiredEnvironmentId
        }
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
    }

    if (lookupDataContext.lookupData === null) {
        return "Loading";
    } else {
        const lookupData = lookupDataContext.lookupData;

        return (
            <Wizard
                onSubmit={onSubmit}
            >
                <Wizard.Page>
                    <label>Koľko hodín denne máte na starostlivosť o psa?</label>
                    <div>
                        <div className="mt-10 mr-64">
                            <FormOptionField
                                type="radio"
                                options={lookupData.attentionRequirementOptions}
                                label=""
                                name="RequiredAttentionId"
                            />
                        </div>
                    </div>
                </Wizard.Page>
                <Wizard.Page>
                    <label>Psík bude bývať v:</label>
                    <div>
                        <div className="mt-10 mr-64">
                            <FormOptionField
                                type="radio"
                                options={lookupData.requiredEnvironmentOptions}
                                label=""
                                name="RequiredEnvironmentId"
                            />
                        </div>
                    </div>
                </Wizard.Page>
                <Wizard.Page>
                    <label>Koľko členov má vaša domácnosť?</label>
                    <Field
                        name="numOfPeopleInHousehold"
                        component="input"
                        type="number"
                        step="1"
                    />
                </Wizard.Page>
                <Wizard.Page>
                    <label>Koľko detí do 6 rokov žije vo Vašej domácnosti?</label>
                    <Field
                        name="numOfChildrenInHousehold"
                        component="input"
                        type="number"
                        step="1"
                    />
                </Wizard.Page>
                <Wizard.Page>
                    <h1><label>Máte doma aj iné zvieratá?</label></h1>
                    <label>Pes</label>
                    <Field
                        name="numOfDogsInHousehold"
                        component="input"
                        type="number"
                        step="1"
                    />
                    <label>Mačka</label>
                    <Field
                        name="numOfCatsInHousehold"
                        component="input"
                        type="number"
                        step="1"
                    />
                    <label>Iné</label>
                    <Field
                        name="numOfOtherAnimalsInHousehold"
                        component="input"
                        type="number"
                        step="1"
                    />
                </Wizard.Page>
                <Wizard.Page>
                    <div>
                        <label>Koľko máte skúseností so starostlivosťou o psíka?</label>
                        <div>
                            <label>
                                <Field
                                    name="RequiresExperiencedOwner"
                                    component="input"
                                    type="radio"
                                    value={false}
                                />{' '}
                                    Začiatočník
                                    </label>
                            <label>
                                <Field
                                    name="RequiresExperiencedOwner"
                                    component="input"
                                    type="radio"
                                    value={true}
                                />{' '}
                                    Skúsený
                                    </label>
                            <label>
                                <Field
                                    name="RequiresExperiencedOwner"
                                    component="input"
                                    type="radio"
                                    value={true}
                                />{' '}
                                    Chovateľ
                                    </label>
                        </div>
                    </div>

                </Wizard.Page>
            </Wizard>
        );
    }
}

export default PreferencesWizzardForm;
