
import { CINEMAS_LIST } from './types';
import { initFetch } from '../middleware/index-api';
import { CINEMA_LIST_API } from '../middleware/apis';

export const cinemasList = (data) => {
	return {
		type: CINEMAS_LIST,
		data
	}
}

export const initCinemas = (num) => {
	return initFetch(cinemasList)(CINEMA_LIST_API + `?page=${num}`);
}