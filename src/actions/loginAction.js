export const loginAction=(username,password)=>{
    return initFetch((data)=>{ return {type:'login',data}})(`http://45.76.105.46:8080/user/login?username=${username}&password=${password}`)
}
export const setPasswordAction = { type: 'password' }
export const setUsernameAction = { type: 'username' }

function initFetch(action) {
	return (url) => {
		return (dispatch) => {fetch(url).then(res => res.json())
			.then(json => {
				dispatch(action(json));
			}).catch(msg => console.log('login出错了  '+ msg));
		}
	}
}
