import { put, takeLatest, call } from 'redux-saga/effects';
import { films as F, planets as P} from '../definitions'
import { fetchFilms } from '../../services/api';

function* fetchFilmsSaga() {
  try {
    
    const response = yield call(fetchFilms);
    yield put({ type: F.FETCH_FILMS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: F.FETCH_FILMS_FAILED, payload: error });
  }
}

const filmsSagas= [
  takeLatest(F.FETCH_FILMS_REQUEST, fetchFilmsSaga),
]

export  {filmsSagas};
