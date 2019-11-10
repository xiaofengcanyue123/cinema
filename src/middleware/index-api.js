export function initFetch(action) {
	return (url) => {
		return (dispatch) => {fetch(url).then(res => res.json())
			.then(json => {
				dispatch(action(json));
				// dispatch(fetchLoading(false));
			}).catch(msg => alert('usshowList-err  '+ msg));
		}
	}
}

export function initChange(action) {
	return (dispatch) => {
		dispatch(action())
	}
}
