import axios from "axios";

const SWAPI_BASE_URL = "https://swapi.dev/api";

export const fetchFilms = async () => {
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/films`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching films:", error);
    throw error;
  }
};

export const fetchPlanetDetails = async (planetUrl: string) => {
  try {
    const response = await axios.get(planetUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error;
  }
};

const TMDB_API_KEY = "61c8b8c08d33a62f19b9dd4bdd5100b2";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovieImage = async (movieName: string) => {
  try {
    const fullNameMovie = `Star Wars: ${movieName}`;
    const searchResponse = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        fullNameMovie
      )}`
    );
    const searchData = await searchResponse.json();

    const movieId = searchData.results[0]?.id;

    if (movieId) {
      const detailsResponse = await fetch(
        `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`
      );
      const detailsData = await detailsResponse.json();

      const movieImage = detailsData.poster_path
        ? `https://image.tmdb.org/t/p/w500${detailsData.poster_path}`
        : null;

      return movieImage;
    } else {
      throw new Error("No se encontró información para la película.");
    }
  } catch (error) {
    throw error;
  }
};
