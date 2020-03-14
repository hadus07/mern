import { API_KEY, API_URL } from './env'

export function api(url, onlyParam = false) {
	let apiKey = onlyParam
		? `?api_key=${API_KEY}`
		: `&api_key=${API_KEY}`

	return fetch(`${API_URL}${url}${apiKey}`)
		.then(res => res.json())
		.catch(err => console.log(err))
}