import React from 'react';
import useShelterProfileByAdmin from './useShelterProfileByAdmin';
import { Link } from "react-router-dom";

function ShelterProfile() {

    const profile = useShelterProfileByAdmin();

    if (profile === null) {
        return ('Loading');
    } else {
        return (
            <div>
                <p> Názov útulku: <strong> {profile.name} </strong> </p>
                <p> Mesto: <strong> {profile.city} </strong> </p>
                <p> Adresa: <strong> {profile.street} </strong> </p>

                <Link to={`/editShelterProfile`}>
                    <button type="button">
                        Upraviť profil
                    </button>
                </Link>
            </div>
        );
    }
}
export default ShelterProfile;
