import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";

const apiEndpoint = apiUrl;
const config = {
  headers: { Authorization: `Bearer ${getJwt()}` },
};

export function getAllDogs() {
  return http.get(`${apiEndpoint}/dog/allDogs`);
}

export function getDogDetail(dogId) {
  return http.get(`${apiEndpoint}/dog/${dogId}`);
}

export function saveDog(dog) {
  console.log(dog);

  // if (dog.id) {
  //   const body = { ...dog };
  //   delete body.id;
  //   return http.put(`${apiEndpoint}/dog/update/` + dog.id, body, config);
  // }
  return http.post(`${apiEndpoint}/dog/add/`, dog, config);
}

export function deletedog(dogId) {
  return http.delete(`${apiEndpoint}/dog/delete/` + dogId, config);
}
