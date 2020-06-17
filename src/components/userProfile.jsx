import React from 'react';
import { Link } from "react-router-dom";
import useProfile from './useProfile';

function UserProfile() {

  const profile = useProfile();

  if (profile.profile == null) {
    return ('Loading');
  } else {
    return (
      <div>
        <p> Meno: <strong> {profile.profile.firstName} </strong> </p>
        <p> Priezvisko: <strong> {profile.profile.lastName} </strong> </p>
        <p> Email: <strong> {profile.profile.email} </strong> </p>

        <Link to={`/editUserProfile`}>
          <button type="button">
            Upraviť profil
          </button>
        </Link>
        
      </div>
    );
  }
}
export default UserProfile;
