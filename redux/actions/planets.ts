import { planets as P } from '../definitions';


export const fetchPlanetDetailsRequest = (planetUrls: string[]) => ({
    type: P.FETCH_PLANET_DETAILS_REQUEST as typeof P.FETCH_PLANET_DETAILS_REQUEST,
    payload: planetUrls,
  });
  
  export const fetchPlanetDetailsSuccess = (planetDetails: any[]) => ({
    type: P.FETCH_PLANET_DETAILS_SUCCESS as typeof P.FETCH_PLANET_DETAILS_SUCCESS,
    payload: planetDetails,
  });
  
  export const fetchPlanetDetailsFailed = (error: any) => ({
    type: P.FETCH_PLANET_DETAILS_FAILED as typeof P.FETCH_PLANET_DETAILS_FAILED,
    payload: error,
  });

