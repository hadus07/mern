import React from 'react'
import { Search } from '../search'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useHeaderStyles } from './style'

export function Header({ title }) {
	const classes = useHeaderStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<MenuIcon className={classes.menuButton} />
					<Typography className={classes.title} variant="h6" noWrap>
						{title || 'Company Info'}
					</Typography>
					<Search />
				</Toolbar>
			</AppBar>
		</div>
	)
}
