export const baseURL = "https://api.themoviedb.org/3/";
export const baseImageURL = "https://image.tmdb.org/t/p/";
export const key = "api_key=6b4357c41d9c606e4d7ebe2f4a8850ea";

export const searchItem = baseURL + "search/multi?" + key;
export const listingItem =
  baseURL + "movie/now_playing?language=en-US&page=1&" + key;
export const detailItem = (id: string) =>
  baseURL + `movie/${id}?language=en-US&` + key;

export const posterPaths = baseImageURL + "w300";
export const backgroundPaths = "http://image.tmdb.org/t/p/original";
