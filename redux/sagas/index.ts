import { all } from "redux-saga/effects";
import {filmsSagas} from "./filmsSagas";
import {planetsSagas} from "./planetsSagas";

export default function* rootSaga() {
  yield all([...filmsSagas, ...planetsSagas]);
}
