import { useContext, useEffect, useState } from 'react';
import { getUserProfile } from "../services/authService";
import { AuthorizationContext } from "../authorizationProvider";

function useProfile() {
    const [profile, setProfile] = useState(null);
    const authContext = useContext(AuthorizationContext);

    useEffect(() => {
        async function fetchData() {
            if (authContext.authParams.userId !== null) {
                let response = await getUserProfile(authContext.authParams.userId);
                if (response.data) {
                    setProfile(response.data.userProfile);
                }
            }
        }
        fetchData();
    }, [authContext.authParams.userId]);

    return profile;
}

export default useProfile; 