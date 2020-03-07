import { observable, action } from 'mobx'

export const globalState = observable({
	users: []
})

const url = 'https://randomuser.me/api/?results=50&seed=d7146c1bad9441b2'
export const getUsers = action(() => {
	return fetch(url)
		.then(res => res.json())
		.then(({ results }) => {
			globalState.users = results
		})
		.catch(err => console.log(err))
})

export const deleteUser = action(email => {
	globalState.users = globalState.users.filter(user => user.email !== email)
})