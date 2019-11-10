import { MOVIE_LIST, MOVIE_ID } from './types';
import { initFetch } from '../middleware/index-api';
import { movielisturl } from '../middleware/apis';

export const movieList = (data) => {
	return {
		type: MOVIE_LIST,
		data
	}
}

export const initMovie = () => {
	return initFetch(movieList)(movielisturl);
}

export const movieId = (id) => {
	return {
		type: MOVIE_ID,
		id
	}
}

export const setMovieId = (id) => {
	return (dispatch) => { dispatch(movieId(id)) }
}