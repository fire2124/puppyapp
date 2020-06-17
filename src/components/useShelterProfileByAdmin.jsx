import { useEffect, useState, useContext } from 'react';
import { getShelterByAdminId } from "../services/shelterService";
import { AuthorizationContext } from "../authorizationProvider";

function useShelterProfileByAdmin() {
    const [profile, setProfile] = useState(null);
    const authContext = useContext(AuthorizationContext);

    useEffect(() => {
        async function fetchData() {
            if(authContext.authParams.userId !== null){
                let response = await getShelterByAdminId(authContext.authParams.userId);
                if (response) {
                    setProfile(response.data.shelter);
                }
            }
        }
        fetchData();
    }, [authContext.authParams.userId]);

    return profile;
}

export default useShelterProfileByAdmin;