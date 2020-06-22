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

export async function getShelterProfile(id) {
  try {
    console.log(id);
    let response = await http.get(`${apiEndpoint}/shelter/detail/${id}`, config);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getShelterByAdminId(adminId) {
  try {
    console.log(adminId);
    let response = await http.get(`${apiEndpoint}/shelter/detailByAdmin/${adminId}`, config);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function activateShelter(id) {
  try {
    let response = await http.put(`${apiEndpoint}/shelter/applications/accept/${id}`, null, config);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function declineShelter(id) {
  try {
    let response = await http.put(`${apiEndpoint}/shelter/applications/decline/${id}`, null, config);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function editShelterProfile(values, id) {
  try {
    let response = await http.put(`${apiUrl}/shelter/updateProfile/${id}`,values, config);
    if(response.data.succeeded){
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
