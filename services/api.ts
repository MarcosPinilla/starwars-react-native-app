import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

export const fetchFilms = async () => {
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/films`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};

export const fetchPlanetDetails = async (planetUrl: string) => {
  try {
    const response = await axios.get(planetUrl);
    return response.data;
  } catch (error){
    console.error('Error fetching planets:', error);
    throw error;
  }
};
