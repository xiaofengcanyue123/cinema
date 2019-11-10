import { setPasswordAction, setUsernameAction } from '../actions/loginAction'

//reducer
export function loginReducer(state = { username: '', password: '' ,status: '未登录'}, action) {
    console.log(action)
    switch (action.type) {
        case 'login': {
            console.log(action)
            if (action.data.status === '200')
                return { username: state.username, password: state.password, status: '已登录' }
            else
                return state
        }
        case setPasswordAction.type:
            return { username: state.username, password: action.password }
        case setUsernameAction.type:
            return { username: action.username, password: state.password }
        default:
            return state
    }
}