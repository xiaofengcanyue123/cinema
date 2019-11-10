import {CINEMA_DETAIL,CINEMA_DETAIL_LOADED} from './types'
import { initFetch,initChange } from '../middleware/index-api'
import { CINEMA_DETAIL_API } from '../middleware/apis'


export const cinemaDetail = (data) => {
	return {
		type: CINEMA_DETAIL,
		data
	}
}
export const initCinema = (data) => {
	return initFetch(cinemaDetail)(CINEMA_DETAIL_API+data);
}

export const cinemaDetailLoaded = () => {
	return {
		type: CINEMA_DETAIL_LOADED
	}
}
export const initCinemaLoaded = () => {
	return initChange(cinemaDetailLoaded)
}