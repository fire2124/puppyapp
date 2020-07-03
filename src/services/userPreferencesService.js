import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export async function addUserPreference(preference) {
  try {
    let response = await http.post(`${apiEndpoint}/userPreference/setUserPreference`, preference, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}