import React, { createContext, useState, useEffect } from 'react'

export const GlobalState = createContext()

const url = 'https://randomuser.me/api/?results=50&seed=d7146c1bad9441b2'
export function Provider(props) {
	const [users, setUsers] = useState([])

	const state = {
		users,
		getUsers: () => {
			fetch(url)
			.then(res => res.json())
			.then(({ results }) => setUsers(results))
			.catch(err => console.log(err))
		},
		deleteUser: email => {
			setUsers(users.filter(user => user.email !== email))
		}
	}

	useEffect(() => {
		state.getUsers()
	}, [])

	return (
		<GlobalState.Provider value={state}>
			{props.children}
		</GlobalState.Provider>
	)
}