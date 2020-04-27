import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";

const apiEndpoint = apiUrl;
const config = {
  headers: { Authorization: `Bearer ${getJwt()}` },
};

function movieUrl(id) {
  //done
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  //done
  return http.get(`${apiEndpoint}/dog/allDogs`);
}

export function getMovie(movieId) {
  //done
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  console.log(movie);

  if (movie.id) {
    const body = { ...movie };
    delete body.id;
    return http.put(`${apiEndpoint}/dog/update/` + movie.id, body, config);
  }
  return http.post(`${apiEndpoint}/dog/add/`, movie, config);
}

export function deleteMovie(movieId) {
  //done
  return http.delete(`${apiEndpoint}/dog/delete/` + movieId, config);
}
