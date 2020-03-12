import React from 'react'
import { Context } from '../../Context'
import { ListItem } from '../list-item'
import { Pagination } from '../pagination'
import MUList from '@material-ui/core/List'
import { useListStyles } from './style'

export function List() {
	const classes = useListStyles()
	const { companies, loadCompanies, nextPage } = React.useContext(Context)

	React.useEffect(() => {
		loadCompanies()
	}, [])

	React.useEffect(() => {
		console.log(nextPage)
	})

	return (
		<div className={classes.root}>
			<div className={classes.absolute}>
				<Pagination />
			</div>
			<MUList>
				{companies.map(company => (
					<ListItem company={company} key={company.id}/>
				))}
			</MUList>
		</div>
	)
}
