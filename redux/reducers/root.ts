import { combineReducers } from 'redux';
import films from './films';

const rootReducer = combineReducers({
  films: films,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
