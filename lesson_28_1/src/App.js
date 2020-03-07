import React from 'react'
import { useStyles } from './styles'
import { Provider } from './GlobalState'
import { Users } from './components/Users'
import { UserInfo } from './components/UserInfo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


export function App() {
	const classes = useStyles()

	return (
		<Provider>
			<BrowserRouter>
				<div className={classes.cont}>
					<Switch>
						<Route path="/" exact>
							<Users />
						</Route>
						<Route path="/info">
							<UserInfo/>
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	)
}