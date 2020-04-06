import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth/register/user";

export function register(user) {
  const auth = {
    email: user.email,
    password: user.password,
    rememberMe: true,
  };
  return http.post(apiEndpoint, auth);
}
