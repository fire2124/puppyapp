import http from "./httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";

export async function login(credentials) {
  return await http.put(`${apiUrl}/auth/login`, credentials);
}

export async function refresh(accessToken, refreshToken) {
  const request = {
    accessToken,
    refreshToken,
  };
  try {
    return await http.put(`${apiUrl}/auth/refresh`, request);
  } catch (error) {
    toast.error(error);
  }
}

export function registerUser(user) {
  try {
    return http.post(`${apiUrl}/auth/register/user`, user);
  } catch (error) {
    toast.error(error);
  }
}

export function registerShelter(shelter) {
  try {
    return http.post(`${apiUrl}/auth/register/shelter`, shelter);
  } catch (error) {
    toast.error(error);
  }
}

export default {
  login,
  registerUser,
  registerShelter,
  refresh
};
