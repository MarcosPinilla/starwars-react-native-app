import { films as F } from '../definitions';

interface FilmsState {
  films: any[];
  loading: boolean;
  error: any;
}

const initialState: FilmsState = {
  films: [],
  loading: false,
  error: null,
};

const films = (state = initialState, action: any) => {
  switch (action.type) {
    case F.FETCH_FILMS_REQUEST:
      return {
          ...state,
          loading: true,
          error: null,
      };
    case F.FETCH_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
        loading: false,
        error: null,
      };
    case F.FETCH_FILMS_FAILED:
      return {
        ...state,
        films: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default films;
