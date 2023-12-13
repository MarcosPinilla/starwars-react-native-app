import { put, takeLatest, call, all } from 'redux-saga/effects';
import { fetchPlanetDetailsSuccess, fetchPlanetDetailsFailed } from '../actions';
import { films as F, planets as P } from '../definitions'
import { fetchPlanetDetails } from '../../services/api';

function* fetchPlanetDetailsSaga(params: any) {
    try {
      const planetDetailsPromises = params?.payload.map((planetUrl: string) =>
        call(fetchPlanetDetails, planetUrl)
      );
      const planetDetails = yield all(planetDetailsPromises);

      yield put(fetchPlanetDetailsSuccess(planetDetails));
    } catch (error) {
      yield put(fetchPlanetDetailsFailed(error));
    }
  }

const planetsSagas = [
  takeLatest(P.FETCH_PLANET_DETAILS_REQUEST, fetchPlanetDetailsSaga),
]

export {planetsSagas};