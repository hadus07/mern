import React from 'react'
import { User } from './User'
import List from '@material-ui/core/List'

export function Users(props) {
	return (
		<List>
			{props.users.map(user => (
				<User user={user} key={user.id.value}/>
			))}
		</List>
	)
}