import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth/register/user";
const apiEndpoint2 = apiUrl + "/auth/register/shelter";

export function register(user) {
  console.log(user);

  const auth = {
    email: user.email,
    password: user.password,
  };
  return http.post(apiEndpoint, auth);
}

export function registerShelter(user) {
  console.log(user);

  const auth = {
    name: user.name,
    city: user.city,
    street: user.street,
    shelterCode: user.shelterCode,
    email: user.email,
    password: user.password,
  };
  return http.post(apiEndpoint2, auth);
}
