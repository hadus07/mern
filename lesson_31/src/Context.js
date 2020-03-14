import React from 'react'
import { api } from './api'

export const Context = React.createContext()

export function Provider({ children }) {

	const [page, setPage] = React.useState(0)
	const [pageSize, setPageSize] = React.useState(5)
	const [loading, setLoading] = React.useState(false)
	const [nextPage, setNextPage] = React.useState([''])
	const [companies, setCompanies] = React.useState([])

	function loadCompanies(pageId = '', backwards = false) {
		setLoading(true)
		api(`companies?next_page=${pageId}&page_size=${pageSize}`)
			.then(res => {
				if (backwards) {
					setNextPage(nextPage.slice(0, -1))
				} else {
					setNextPage([...nextPage, res.next_page])
				}
				setCompanies(res.companies)
				setLoading(false)
			})
			.catch(err => console.log(err))
	}

	React.useEffect(() => {
		loadCompanies(nextPage[nextPage.length - 2])
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	React.useEffect(() => {
		loadCompanies(nextPage[nextPage.length - 2])
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageSize])


	return (
		<Context.Provider
			value={{
				page,
				setPage,
				loading,
				pageSize,
				nextPage,
				companies,
				setPageSize,
				setNextPage,
				loadCompanies,
			}}
		>
			{children}
		</Context.Provider>
	)
}