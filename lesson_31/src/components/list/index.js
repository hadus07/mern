import React from 'react'
import { Context } from '../../Context'
import { ListItem } from '../list-item'
import { Pagination } from '../pagination'
import MUList from '@material-ui/core/List'
import { useListStyles } from './style'

export function List() {
	const classes = useListStyles()
	const { companies, loadCompanies } = React.useContext(Context)

	return (
		<div className={classes.root}>
			<div className={classes.absolute}>
				<Pagination
					data={companies}
					onChangeData={loadCompanies}
				/>
			</div>
			<MUList>
				{companies.map(company => (
					<ListItem company={company} key={company.id}/>
				))}
			</MUList>
		</div>
	)
}
