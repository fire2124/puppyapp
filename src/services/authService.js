import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth/login";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password, rememberMe) {
  const { data: jwt } = await http
    .put(apiEndpoint, {
      email,
      password,
      rememberMe,
    })
    .then((response) => {
      console.log(response);
    });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};