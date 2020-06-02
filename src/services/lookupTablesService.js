import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export function getAllLookupData() {
    return http.get(`${apiEndpoint}/lookupTables/getAllLookupData`);
}

export default { getAllLookupData };