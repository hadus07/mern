import React, { useContext } from 'react'
import { User } from './User'
import { useStyles } from '../styles'
import List from '@material-ui/core/List'
import { GlobalState } from '../GlobalState'
import CircularProgress from '@material-ui/core/CircularProgress'
 
export function Users() {
	const classes = useStyles()
	const { users } = useContext(GlobalState)

	return (
		<List>
			{users.length
				? users.map(user => (
					<User user={user} key={user.email}/>
				))
				: (
					<div className={classes.progress}>
						<CircularProgress />
					</div>
				)}
		</List>
	)
}