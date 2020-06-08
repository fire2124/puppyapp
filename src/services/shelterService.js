import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('AccessToken')}` },
};

export async function getShelterApplications() {
  try {
    let response = await http.get(`${apiEndpoint}/shelter/applications`, config);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAllShelters() {
  try {
    let response = await http.get(`${apiEndpoint}/shelter/allShelters`, config);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function activateShelter(id) {
  try {
    let response = await http.post(`${apiEndpoint}/shelter/applications/accept/${id}`, config);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function declineShelter(id) {
  try {
    let response = await http.delete(`${apiEndpoint}/shelter/applications/decline/${id}`, config);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
