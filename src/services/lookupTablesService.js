import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";

const apiEndpoint = apiUrl;
const config = {
    headers: { Authorization: `Bearer ${getJwt()}` },
};

export function getAllLookupData() {
    return http.get(`${apiEndpoint}/lookupTables/getAllLookupData`);
}

export default { getAllLookupData };