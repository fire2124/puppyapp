import { useEffect, useState } from 'react';
import { getShelterProfile } from "../services/shelterService";

function useShelterProfile(shelterId) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        async function fetchData() {
            let response = await getShelterProfile(shelterId);
            if (response.data) {
                setProfile(response.data.shelter);
            }
        }
        fetchData();
    }, [shelterId]);

    return profile;
}

export default useShelterProfile;