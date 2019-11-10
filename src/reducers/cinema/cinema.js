import { CINEMA_DETAIL,CINEMA_DETAIL_LOADED } from '../../actions/types'

const INITIAL_STATE = {
    data: {},
    loaded: false
}
export const cinema = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CINEMA_DETAIL:
            return {
                ...state,
                data: action.data.result,
                loaded: true
            }
        case CINEMA_DETAIL_LOADED:
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
}