const myKey = 'e6058c5932c76fc2a47d8a759324303c';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url) {
    const response = await fetch(url);
    return response.ok ? await response.json() : new Error('Not found');
}

export function fetchTrendingMovies () {
    return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${myKey}`);
}

export function fetchKeyWordSearchMovie(movie) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${myKey}&query=${movie}`);
}

export function fetchMovieIdSearch(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${myKey}`);
}