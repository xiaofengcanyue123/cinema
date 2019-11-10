import { MOVIE_DETAIL, MOVIE_DETAIL_RESET } from './types';
import { initFetch } from '../middleware/index-api';
import { moviedetail } from '../middleware/apis';

//近期上映
export const movieDetail = (data) => {
	return {
		type: MOVIE_DETAIL,
		data
	}
}

//清空电影详情信息
export const resetMovieDetail = () => (dispatch) => {
		dispatch({
			type: MOVIE_DETAIL_RESET
		});
}

export const initMovieDetail = (movieId) => {
	return initFetch(movieDetail)(moviedetail + `?movieId=${movieId}`);
}