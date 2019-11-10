import { ORDER_LIST } from './types';
import { initFetch } from '../middleware/index-api';
import { usershow } from '../middleware/apis';

//订单列表
export const userList = (data) => {
	return {
		type: ORDER_LIST,
		data
	}
}
export const initUsShow = () => {
	return initFetch(userList)(usershow);
}