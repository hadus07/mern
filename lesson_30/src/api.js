import { API_KEY, API_URL } from './env'

export function api(url) {
	return fetch(`${API_URL}${url}&api_key=${API_KEY}`)
		.then(res => res.json())
		.catch(err => console.log(err))
}