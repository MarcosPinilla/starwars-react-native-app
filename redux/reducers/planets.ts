import { planets as P } from '../definitions';

interface PlanetsState {
  planetDetails: any[];
  loading: boolean;
  error: any;
}

const initialState: PlanetsState = {
  planetDetails: [],
  loading: false,
  error: null,
};

const planets = (state = initialState, action: any) => {
  switch (action.type) {
    case P.FETCH_PLANET_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case P.FETCH_PLANET_DETAILS_SUCCESS:
      return {
        ...state,
        planetDetails: action.payload,
        loading: false,
        error: null,
      };
    case P.FETCH_PLANET_DETAILS_FAILED:
      return {
        ...state,
        planetDetails: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default planets;