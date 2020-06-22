import React from "react";
import { Link } from "react-router-dom";
import useProfile from "../components/useProfile";
import ilustracia from "../staticImage/Rectangle 213.png";

function UserProfile() {
  const profile = useProfile();

  if (profile.profile == null) {
    return "Loading";
  } else {
    return (
      <div className=" xl:mx-auto ">
        <div className="xl:flex xl:flex-no-wrap xl:m-auto backgroundUserProfile">
          <div className="justify-start xl:ml-64">
            <img src={ilustracia} alt="Logo" className=" xl:mt-32" />
          </div>
          <div className="justify-start mt-32 ml-10">
            <div>
              <div className="text-left text-3xl font-bold text-white">
                {profile.profile.firstName} {profile.profile.lastName}
              </div>
              <div className="text-left text-2xl text-white">
                {profile.profile.email}
              </div>
            </div>

            <Link
              to={`/editUserProfile`}
              className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4 inline-block mt-10"
            >
              <button type="button">Upraviť profil</button>
            </Link>
          </div>
        </div>
        <div className="ml-64 mt-16">
          <label className="text-left text-2xl font-bold pod mr-40">
            O mne
          </label>
          <hr/>
        </div>
        <div className="ml-64 mt-16">
          <label className="text-left text-2xl font-bold pod mr-40">
            Obľúbené
          </label>
          <hr/>
        </div>
      </div>
    );
  }
}
export default UserProfile;
