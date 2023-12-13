import { films as F } from '../definitions';


export const fetchFilmsRequest = () => ({
  type: F.FETCH_FILMS_REQUEST as typeof F.FETCH_FILMS_REQUEST,
});

export const fetchFilmsSuccess = (films: any[]) => ({
  type: F.FETCH_FILMS_SUCCESS as typeof F.FETCH_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilmsFailed = (error: any) => ({
  type: F.FETCH_FILMS_FAILED as typeof F.FETCH_FILMS_FAILED,
  payload: error,
});
