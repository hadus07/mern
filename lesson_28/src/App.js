import { useStyles } from './styles'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { Users } from './components/Users'
import { UserInfo } from './components/UserInfo'
import { getUsers, globalState } from './globalState'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'


function _App() {
	const classes = useStyles()

	useEffect(() => {
		getUsers()
	}, [])
	return (
		<BrowserRouter>
			<div className={classes.cont}>
				<Switch>
					<Route path="/" exact>
						{globalState.users.length
							? <Users />
							: (
								<div className={classes.progress}>
									<CircularProgress />
								</div>
							)
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

export const App = observer(_App)