
import { CINEMAS_LIST } from '../../actions/types';



export const cinemas = (state = {}, action) => {
	switch (action.type) {
		case CINEMAS_LIST:
			return  {
				...state,
				data : action.data.data.result
			};
		default:
		return state;
	}
}