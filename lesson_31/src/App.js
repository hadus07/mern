import React from 'react'
import { Provider } from './Context'
import { List } from './components/list'
import { Info } from './components/info'
import { Header } from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export function App() {
	return (
		<BrowserRouter>
			<Provider>
				<Header />
				<Switch>
					<Route path='/' exact>
						<List />
					</Route>
					<Route path='/info'>
						<Info/>
					</Route>
				</Switch>
			</Provider>
		</BrowserRouter>
	)
}