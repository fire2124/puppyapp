import React from 'react';
import useShelterProfileByAdmin from './useShelterProfileByAdmin';
import { Link } from "react-router-dom";

function ShelterProfile() {

    const profile = useShelterProfileByAdmin();
    console.log(profile);
    
    if (profile === null) {
        return ('Loading');
    } else {
        return (
            <div>
                <p> Názov útulku: <strong> {profile.name} </strong> </p>
                <p> Mesto: <strong> {profile.city} </strong> </p>
                <p> Ulica: <strong> {profile.street} </strong> </p>
                <p> ICO: <strong> {profile.ico} </strong> </p>
                <p> Císlo učtu: <strong> {profile.bankAccountNumber} </strong> </p>
                <p> Iban: <strong> {profile.iban} </strong> </p>
                <p> Tel. č.: <strong> {profile.phoneNumber} </strong> </p>
                <p> PSČ: <strong> {profile.postCode} </strong> </p>
                <p> Číslo útulku: <strong> {profile.shelterCode} </strong> </p>
                <Link to={`/editShelterProfile`} >
                    <button type="button" className="text-orange font-semibold font-sm text-center bg-orange-400 m-2 inline-block mt-20 ml-64">
                        Upraviť profil
                    </button>
                </Link>
            </div>
        );
    }
}
export default ShelterProfile;
