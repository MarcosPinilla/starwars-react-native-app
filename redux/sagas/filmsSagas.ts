import { put, takeLatest, call } from 'redux-saga/effects';
import { films as F } from '../definitions'
import { fetchFilms } from '../../services/api';

function* fetchFilmsSaga() {
  try {
    const response = yield call(fetchFilms);
    yield put({ type: F.FETCH_FILMS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: F.FETCH_FILMS_FAILED, payload: error });
  }
}

function* filmsSagas() {
  yield takeLatest(F.FETCH_FILMS_REQUEST, fetchFilmsSaga);
}

export default filmsSagas;
