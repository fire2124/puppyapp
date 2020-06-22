import useShelterProfileByAdmin from "./useShelterProfileByAdmin";
import React from 'react';
import { Form } from "react-final-form";
import FormTextField from "./common/formTextField";
import { editShelterProfile } from "../services/shelterService";

function EditShelterProfile(props) {
  
  const profile = useShelterProfileByAdmin();

  const onSubmit = (values) => {
    async function editprofile() {
      let response = await editShelterProfile(values, profile.id);
      if (response != null) {
        props.history.push("/shelterProfile");
      }
    }
    editprofile();
  }

  if (profile == null) {
    return ('Loading');
  } else {
    return (
      <Form
        onSubmit={onSubmit}

        initialValues={{
          Name: profile.name,
          City: profile.city,
          Street: profile.street
        }}

        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormTextField name='Name' label='Názov útulku ' placeholder='Meno' />
              <FormTextField name='City' label='Mesto ' placeholder='Priezvisko'/>
              <FormTextField name='Street' label='Adresa ' placeholder='Priezvisko'/>
            </div>

            <button type="submit">
              Uložiť profil
            </button>
          </form>
        )}
      />
    );
  }
}
export default EditShelterProfile;

