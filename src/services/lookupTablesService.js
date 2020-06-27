import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export async function getAllLookupData() {
    return await http.get(`${apiEndpoint}/lookupTables/getAllLookupData`);
}

export default { getAllLookupData };