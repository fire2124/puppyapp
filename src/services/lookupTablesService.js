import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";

const apiEndpoint = apiUrl;
const config = {
  headers: { Authorization: `Bearer ${getJwt()}` },
};

export function getAllFurTypes() {
  return http.get(`${apiEndpoint}/lookupTables/getAllFurTypes`);
}

export function getAllColors() {
    return http.get(`${apiEndpoint}/lookupTables/getAllColors`);
}

export function getAllBehaviorTraits() {
    return http.get(`${apiEndpoint}/lookupTables/getAllBehaviorTraits`);
}

export function getAllAgeCategories() {
    return http.get(`${apiEndpoint}/lookupTables/getAllAgeCategories`);
}

export function getAllBreeds() {
    return http.get(`${apiEndpoint}/lookupTables/getAllBreeds`);
}

export function getAllGenders() {
    return http.get(`${apiEndpoint}/lookupTables/getAllGenders`);
}

export function getAllSizeCategories() {
    return http.get(`${apiEndpoint}/lookupTables/getAllSizeCategories`);
}

export function getAllAttentionRequirements() {
    return http.get(`${apiEndpoint}/lookupTables/getAllAttentionRequirements`);
}

export function getAllVaccinationTypes() {
    return http.get(`${apiEndpoint}/lookupTables/getAllVaccinationTypes`);
}

export function getAllCompatibilities() {
    return http.get(`${apiEndpoint}/lookupTables/getAllCompatibilities`);
}

export default {
    getAllFurTypes,
    getAllColors,
    getAllBehaviorTraits,
    getAllAgeCategories,
    getAllBreeds,
    getAllGenders,
    getAllSizeCategories,
    getAllAttentionRequirements,
    getAllVaccinationTypes,
    getAllCompatibilities,
  };