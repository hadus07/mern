import React from 'react'
import { api } from './api'

export const Context = React.createContext()

export function Provider({ children }) {

	const [pageSize, setPageSize] = React.useState(5)
	const [nextPage, setNextPage] = React.useState([''])
	const [companies, setCompanies] = React.useState([])

	function loadCompanies(index = 0, backwards = false) {
		if (backwards) {
			setNextPage(nextPage.slice(0, -1))
		}
		api(`companies?next_page=${nextPage[index]}&page_size=${pageSize}`)
		.then(res => {
			setCompanies(res.companies)
			if (!backwards && res.next_page) {
				setNextPage([...nextPage, res.next_page])
			}
		})
		.catch(err => console.log(err))
	}

	const state = {
		pageSize,
		nextPage,
		companies,
		setPageSize,
		setNextPage,
		loadCompanies,
	}

	return (
		<Context.Provider value={state}>
			{children}
		</Context.Provider>
	)
}