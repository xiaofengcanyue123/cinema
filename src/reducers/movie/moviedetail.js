/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-07-05 06:15:11
 * @modify date 2017-07-05 06:15:11
 * @desc [description]
*/
import { MOVIE_DETAIL, MOVIE_DETAIL_RESET } from '../../actions/types';
const INITIAL_STATE = {
	data: {},
	loaded: false
}
export const MovieDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MOVIE_DETAIL:
			return {
				...state,
				data: action.data.result,
				loaded: true
			}
		case MOVIE_DETAIL_RESET:
			return {
				...state,
				data: {},
				loaded: false
			}
		default:
			return {
				...state
			}
	}
	// switch (action.type) {
	// 	case MOVIE_DETAIL:
	// 		return Object.assign(
	// 			{}, state, {
	// 			data: action.data,
	// 			loaded: true
	// 		});
	// 	default:
	// 		return state;
	// }
}