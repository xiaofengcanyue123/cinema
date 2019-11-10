import { MOVIE_LIST, MOVIE_ID } from '../../actions/types';

export const movie = (state = {}, action) => {
	switch (action.type) {
		case MOVIE_LIST:
			console.log(action.data.data.result)
			return Object.assign(
			{} , state , {
				data : action.data.data.result
			});
		default:
		return state;
	}
}

export const movieId = (state = {}, action) => {
	switch (action.type) {
		case MOVIE_ID:
			// alert('fgfhfhnffh')
			let id = Object.assign(
			{} , state , {
				id : action.id
			});
			console.log('testreduxdata',id)
			return id;
		default:
			return state;			
	}
}