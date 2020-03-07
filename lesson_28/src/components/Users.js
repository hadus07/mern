import React from 'react'
import { toJS } from 'mobx'
import { User } from './User'
import { observer } from 'mobx-react'
import List from '@material-ui/core/List'
import { globalState } from '../globalState'
 
function _Users() {
	return (
		<List>
			{globalState.users.map(user => (
				<User user={toJS(user)} key={user.email}/>
			))}
		</List>
	)
}

export const Users = observer(_Users)