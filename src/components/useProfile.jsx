import { useContext, useEffect, useState } from 'react';
import { getUserProfile } from "../services/authService";
import { AuthorizationContext } from "../authorizationProvider";

function useProfile() {
    const [profile, setProfile] = useState(null);
    const [userId, setuserId] = useState(null);
    const authContext = useContext(AuthorizationContext);

    useEffect(() => {
        async function fetchData() {
            if(authContext.authParams.userId !== null){
                setuserId(authContext.authParams.userId);
                let response = await getUserProfile(authContext.authParams.userId);
                if (response) {
                    setProfile(response.data.userProfile);
                }
            }
        }
        fetchData();
    }, [authContext.authParams.userId]);

    return {profile: profile, 
            userId: userId};
}

export default useProfile;