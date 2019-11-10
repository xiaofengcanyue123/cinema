import { ORDER_LIST, INCREASE, DECREASE, RESET } from '../../actions/types';

const INITIAL_STATE = {
	data: {},
}

export const userOrder = (state = INITIAL_STATE, action) => {
	console.log('userOrder Redux初始化')
	switch (action.type) {
		case ORDER_LIST:
			console.log('orderList 获取数据')
			return {
				...state,
				data: action.data.result
			}
		// return Object.assign(
		// {} , state , {
		// 	data : action.data.result
		// });
		default:
			return state;
	}
}