import http from "./httpService";
import { apiUrl } from "../config.json";

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('AccessToken')}` },
};

export async function login(credentials) {
  try {
    let response = await http.put(`${apiUrl}/auth/login`, credentials);
    if(response.data.succeeded){
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function refresh(accessToken, refreshToken) {
  const request = {
    accessToken,
    refreshToken,
  };
  try {
    let response = await http.put(`${apiUrl}/auth/refresh`, request);
    if(response.data.succeeded){
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(user) {
  try {
    let response = await http.post(`${apiUrl}/auth/register/user`, user);
    if(response.data.succeeded){
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function registerShelter(shelter) {
  try {
    let response = await http.post(`${apiUrl}/auth/register/shelter`, shelter);
    if(response.data.succeeded){
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUserProfile(id) {
  try {
    let response = await http.get(`${apiUrl}/auth/profile/${id}`, config);
    if(response.data.succeeded){
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function editUserProfile(values, id) {
  try {
    let response = await http.put(`${apiUrl}/auth/updateProfile/${id}`,values, config);
    if(response.data.succeeded){
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export default {
  login,
  registerUser,
  registerShelter,
  refresh,
  editUserProfile,
};
