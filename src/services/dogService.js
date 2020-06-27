import http from "./httpService";
import { apiUrl } from "../config.json";
import queryString from 'query-string';

const apiEndpoint = apiUrl;

export async function getAllDogs() {
  try {
    let response = await http.get(`${apiEndpoint}/dog/allDogs`);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getFiltered(filterParams) {
  try {
    let response = await http.get(`${apiEndpoint}/dog/getFiltered`, {
      params: filterParams,
      paramsSerializer: params => {
        return queryString.stringify(params)
      }
    });
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getDogDetail(dogId) {
  try {
    let response = await http.get(`${apiEndpoint}/dog/detail/${dogId}`);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}



export async function addDog(dog) {
  try {
    let response = await http.post(`${apiEndpoint}/dog/add/`, dog, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deletedog(dogId) {
  try {
    let response = await http.delete(`${apiEndpoint}/dog/delete/` + dogId, http.getAuthHeader());
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
