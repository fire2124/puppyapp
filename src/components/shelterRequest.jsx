import React from 'react';
import useShelterProfile from './useShelterProfile';
import { activateShelter, declineShelter } from "../services/shelterService";

function ShelterRequest(props) {

  async function acceptShelterRequest() {
    let response = await activateShelter(profile.id);
    if (response != null) {
      console.log('shelter accepted successfuly');
      props.history.push("/shelterRequests");
    }
  }

  async function declineShelterRequest() {
    let response = await declineShelter(profile.id);
    if (response != null) {
      console.log('shelter declined successfuly');
      props.history.push("/shelterRequests");
    }
  }

  const { match: { params } } = props;
  let shelterId = params.shelterId;
  const profile = useShelterProfile(shelterId);
  if (profile === null) {
    return ('Loading');
  } else {
    return (
      <div>
        <p> Názov útulku: <strong> {profile.name} </strong> </p>
        <p> Mesto: <strong> {profile.city} </strong> </p>
        <p> Adresa: <strong> {profile.street} </strong> </p>

        <button
          type="button"
          onClick={acceptShelterRequest}
        >
          Potvrdiť žiadosť
        </button>

        <button
          type="button"
          onClick={declineShelterRequest}
        >
          Zamietnuť žiadosť
        </button>
      </div>
    );
  }
}
export default ShelterRequest;
