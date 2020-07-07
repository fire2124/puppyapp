import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export async function getShelterApplications() {
  try {
    let response = await http.get(`${apiEndpoint}/shelter/applications`, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAllShelters() {
  try {
    let response = await http.get(`${apiEndpoint}/shelter/allShelters`);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getShelterProfile(id) {
  try {
    let response = await http.get(`${apiEndpoint}/shelter/detail/${id}`, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getShelterByAdminId(adminId) {
  try {
    let response = await http.get(`${apiEndpoint}/shelter/detailByAdmin/${adminId}`, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function activateShelter(id) {
  try {
    let response = await http.put(`${apiEndpoint}/shelter/applications/accept/${id}`, null, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function declineShelter(id) {
  try {
    let response = await http.put(`${apiEndpoint}/shelter/applications/decline/${id}`, null, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function editShelterProfile(values, id) {
  try {
    let response = await http.put(`${apiUrl}/shelter/updateProfile/${id}`,values, http.getAuthHeader());
    if(response.data.succeeded){
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
