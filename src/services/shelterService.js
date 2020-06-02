import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('AccessToken')}` },
};

export function getShelterApplications() {
  return http.get(`${apiEndpoint}/shelter/applications`, config);
}

export function getAllShelters() {
  return http.get(`${apiEndpoint}/shelter/allShelters`, config);
}

export function activateShelter(id) {
  return http.post(`${apiEndpoint}/shelter/applications/accept/${id}`, config);
}

export function declineShelter(id) {
  return http.delete(`${apiEndpoint}/shelter/applications/decline/${id}`, config);
}
