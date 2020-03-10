import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

import { useSearchStyles } from './style'

export function Search() {
	const classes = useSearchStyles()

	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder="Search…"
				classes={{ root: classes.inputRoot, input: classes.inputInput }}
			/>
		</div>
	)
}
