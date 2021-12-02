const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6979cd1cbea8e51a3659aff13232cb9d';
export const IMG_URL = size =>
  `https://image.tmdb.org/t/p/${size}`;

function fetchWithErrorHandling(url = '') {
  return fetch(url).then(response =>
    response.ok
      ? response.json()
      : Promise.reject(new Error('Not found')),
  );
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
}

export function fetchMovies(query = '', page = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  );
}

export function fetchFilmDetails(movieId = null) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
  );
}

export function fetchCredits(movieId = null) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}

export function fetchReviews(movieId = null, page = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=${page}`,
  );
}
