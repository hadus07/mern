import React from 'react'
import { Search } from '../search'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import Typography from '@material-ui/core/Typography'
import { useHeaderStyles } from './style'

export function Header({ title }) {
	const classes = useHeaderStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<AcUnitIcon className={classes.menuButton} />
					<Typography className={classes.title} variant="h6" noWrap>
						{title || 'Company Info'}
					</Typography>
					<Search />
				</Toolbar>
			</AppBar>
		</div>
	)
}
