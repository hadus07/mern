import { useStyles } from './styles'
import { Users } from './components/Users'
import { UserInfo } from './components/UserInfo'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'


export function App() {
	const classes = useStyles()
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=50')
			.then(res => res.json())
			.then(users => {
				console.log(users)
				setUsers(users.results)
			})
			.catch(err => console.log(err))
		console.log('*')
	}, [])

	return (
		<BrowserRouter>
			<div className={classes.cont}>
				<Switch>
					<Route path="/" exact>
						{users.length
							? <Users users={users} />
							: <CircularProgress />
						}
					</Route>
					<Route path="/info">
						<UserInfo/>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	)
}