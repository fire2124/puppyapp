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
          Street: profile.street,
          ICO: profile.ico,
          BankAccount: profile.bankAccountNumber,
          Iban:  profile.iban,
          PhoneNumber:  profile.phoneNumber,
          PostCode:  profile.postCode,
          ShelterCode: profile.shelterCode,
                 

        }}

        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormTextField name='Name' label='Názov útulku ' placeholder='Meno' />
              <FormTextField name='City' label='Mesto ' placeholder='Priezvisko'/>
              <FormTextField name='Street' label='Adresa ' placeholder='Street'/>
              <FormTextField name='ICO' label='IČO ' placeholder='ICO'/>
              <FormTextField name='BankAccount' label='Číslo účtu ' placeholder='BankAccount'/>
              <FormTextField name='Iban' label='IBAN ' placeholder='Iban'/>
              <FormTextField name='PhoneNumber' label='Tel.č.' placeholder='PhoneNumber'/>
              <FormTextField name='PostCode' label='PSČ' placeholder='PostCode'/>
              <FormTextField name='ShelterCode' label='Číslo útulku' placeholder='ShelterCode'/>
            </div>

            <button type="submit" className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-20 ml-64">
              Uložiť profil
            </button>
          </form>
        )}
      />
    );
  }
}
export default EditShelterProfile;

