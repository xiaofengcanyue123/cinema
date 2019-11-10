import { combineReducers } from 'redux'
import { MovieDetailReducer } from './movie/moviedetail'
import { cinemas } from './cinemas/reducers'
import { cinema } from './cinema/cinema'
import { loginReducer } from './loginReducer'
import { movie, movieId } from './movielist/reducers'
import { userOrder } from './user/reducers';

const allReducers = combineReducers({
	MovieDetailReducer: MovieDetailReducer,
	cinemas: cinemas,
	cinema: cinema,
	login: loginReducer,
	movie: movie,
	movieId: movieId,
	userorder:userOrder,
});

export default allReducers;