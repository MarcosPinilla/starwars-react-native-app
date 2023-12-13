import { combineReducers } from 'redux';
import films from './films';
import planets from './planets';

const rootReducer = combineReducers({
  films: films,
  planets: planets,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
