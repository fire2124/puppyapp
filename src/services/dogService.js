import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('AccessToken')}` },
};

export function getAllDogs() {
  return http.get(`${apiEndpoint}/dog/allDogs`);
}

export function getDogDetail(dogId) {
  return http.get(`${apiEndpoint}/dog/detail/${dogId}`);
}

export function addDog(dog) {
  return http.post(`${apiEndpoint}/dog/add/`, dog, config);
}

export function deletedog(dogId) {
  return http.delete(`${apiEndpoint}/dog/delete/` + dogId, config);
}
