import useShelterProfileByAdmin from "./useShelterProfileByAdmin";
import React from "react";
import { editShelterProfile } from "../services/shelterService";
import { Form, Field } from "react-final-form";
import FormTextField from "../components/common/formTextField";
import FormCheckBox from "../components/common/formCheckBoxField";
import FormOptionField from "../components/common/formOptionField";
import { LookupDataContext } from "../lookupDataProvider";
import ilustracia from "../staticImage/adminShelter/addDog/input_field-profilova_foto.png";
import ilustracia2 from "../staticImage/adminShelter/addDog/input_field-profilova_foto (1).png";
import { NavLink } from "react-router-dom";
import SelectOptionField from "../components/common/selectOptionField";

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
  };

  if (profile == null) {
    return "Loading";
  } else {
    return (
      <Form
        onSubmit={onSubmit}
        initialValues={{
          Name: profile.name,
          City: profile.city,
          Street: profile.street,
          ICO: profile.ico,
          Dic: profile.dic,

          BankAccount: profile.bankAccountNumber,
          Iban: profile.iban,
          PhoneNumber: profile.phoneNumber,
          PostCode: profile.postCode,
          ShelterCode: profile.shelterCode,
        }}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label className="text-base font-bold text-2xl ml-10">
              Profil útulku
            </label>
            <div className="xl:flex xl:flex-no-wrap back ml-10 mr-10">
              <div className="xl:flex-none xl:w-4/12 xl:m-16 ml-32">
                <div className="xl:flex xl:flex-no-wrap xl:m-auto">
                  <div className="w-3/12">
                    <img src={ilustracia} alt="Logo" />
                  </div>
                  <div className="w-6/12">
                    <FormTextField name="Name" label="Meno" />
                  </div>
                </div>
                <div className="mt-10">
                  <label className="text-base font-bold">Popis </label>
                  <div className="w-64 min-w-full  py-2 px-4 py-2 px-4  inline-block">
                    <Field
                      name="AdditionalInfo"
                      component="textarea"
                      placeholder="Sem zadajte bližšie informácie, ktoré by mal používateľ vediet o danom psovi."
                      className="w-64 min-w-full h-64 rounded-lg  border-2 border-black"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <label className="text-base font-bold text-2xl ">
                    Adresa{" "}
                  </label>
                  <div className="w-64 min-w-full  ">
                    <FormTextField
                      name="City"
                      label="Mesto "
                      placeholder="Priezvisko"
                    />
                    <FormTextField
                      name="Street"
                      label="Adresa "
                      placeholder="Street"
                    />
                    <FormTextField
                      name="PostCode"
                      label="PSČ"
                      placeholder="PostCode"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:flex-none xl:w-8/12 xl:mt-16 ">
                <div>
                  <label className="text-base font-bold text-2xl ">
                    Kontakty{" "}
                  </label>

                  <div className="flex">
                    <FormTextField
                      name="PhoneNumber"
                      label="Tel.č."
                      placeholder="PhoneNumber"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-bold text-2xl ">
                    Identifikačné číslo{" "}
                  </label>
                  <div className="flex">
                    <div>
                      <FormTextField
                        name="ICO"
                        label="IČO "
                        placeholder="ICO"
                      />
                    </div>
                    <div className="xl:ml-10">
                      <FormTextField
                        name="Dic"
                        label="Dič "
                        placeholder="Dic"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-base font-bold text-2xl ">
                    Bankový účet{" "}
                  </label>
                  <div className="flex">
                    <div>
                      <FormTextField
                        name="BankAccount"
                        label="Číslo účtu "
                        placeholder="BankAccount"
                      />
                    </div>
                    <div className="xl:ml-10">
                      <FormTextField
                        name="Iban"
                        label="IBAN "
                        placeholder="Iban"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <label className="text-base font-bold text-2xl ">
                    Otváracie hodiny{" "}
                  </label>
                  <div className="w-64 min-w-full rounded-full py-2 px-4 py-2 px-4 ">
                   
                  </div>
                </div>
                <div className="mt-10">
                  <label className="text-base font-bold text-2xl ">
                    Sociálne siete{" "}
                  </label>
                  <div className="w-64 min-w-full rounded-full py-2 px-4 py-2 px-4 ">
                   
                  </div>
                </div>
              </div> 
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
export default EditShelterProfile;
