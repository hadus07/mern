import React from 'react'
import { ListItem } from '../list-item'
import { Pagination } from '../pagination'
import MUList from '@material-ui/core/List'
import { useListStyles } from './style'

export function List() {
	const classes = useListStyles()

	return (
		<div className={classes.root}>
			<div className={classes.absolute}>
				<Pagination />
			</div>
			<MUList>
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
			</MUList>
		</div>
	)
}
