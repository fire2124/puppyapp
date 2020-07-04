import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export async function createAdoption(adoption) {
  try {
    let response = await http.post(`${apiEndpoint}/adoption/create`, adoption, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}