import React from 'react';
import useProfile from './useProfile';

function UserProfile() {

  const profile = useProfile();

  if (profile === null) {
    return ('Loading');
  } else {
    return (
      <div>
        <p> Meno: <strong> {profile.firstName} </strong> </p>
        <p> Priezvisko: <strong> {profile.lastName} </strong> </p>
        <p> Email: <strong> {profile.email} </strong> </p>
      </div>
    );
  }
}
export default UserProfile;
