import React from 'react';
import useProfile from './useProfile';
import { Form } from "react-final-form";
import FormTextField from "./common/formTextField"
import { editUserProfile } from '../services/authService';

function EditUserProfile(props) {

  const onSubmit = (values) => {
    async function editprofile() {
      let response = await editUserProfile(values, profile.userId);
      if (response != null) {
        props.history.push("/userProfile");
      }
    }
    editprofile();
  }

  const profile = useProfile();

  if (profile.profile == null) {
    return ('Loading');
  } else {
    return (
      <Form
        onSubmit={onSubmit}

        initialValues={{
          FirstName: profile.profile.firstName,
          LastName: profile.profile.lastName
        }}

        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormTextField name='FirstName' label='Meno ' placeholder='Meno' />
              <FormTextField name='LastName' label='Priezvisko ' placeholder='Priezvisko'/>
            </div>

            <button type="submit">
              Uložiť profil
            </button>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    );
  }
}
export default EditUserProfile;
