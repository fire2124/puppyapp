import React, { useContext} from "react";
import useProfile from "./useProfile";
import { Form } from "react-final-form";
import FormTextField from "./common/formTextField";
import { editUserProfile } from "../services/authService";
import { AuthorizationContext } from "../authorizationProvider";

function EditUserProfile(props) {
  const authContext = useContext(AuthorizationContext);
  const profile = useProfile();

  const onSubmit = (values) => {
    async function editprofile() {
      let response = await editUserProfile(values, authContext.authParams.userId);
      if (response != null) {
        props.history.push("/userProfile");
      }
    }
    editprofile();
  };


  if (profile === null) {
    return "Loading";
  } else {
    console.log(profile);
    
    return (
      <Form
        onSubmit={onSubmit}
        initialValues={{
          FirstName: profile.firstName,
          LastName: profile.lastName,
          Email: profile.email
        }}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="xl:ml-64 xl:flex xl:my-32 my-10">
              <div className="xl:w-6/12 flex-1">
                <div className="ml-32 ">
                  <FormTextField
                    name="FirstName"
                    label="Meno "
                    placeholder="Meno"
                  />
                  <FormTextField
                    name="LastName"
                    label="Priezvisko "
                    placeholder="Priezvisko"
                  />
                  <FormTextField
                    name="Email"
                    label="email "
                    placeholder="Email"
                  />
                  <button
                  className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 my-8"
                  type="submit"
                >
                  Uložiť profil
                </button>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    );
  }
}
export default EditUserProfile;
