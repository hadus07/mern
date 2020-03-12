import React from 'react'
import { Provider } from './Context'
import { List } from './components/list'
import { Info } from './components/info'
import { Header } from './components/header'

export function App() {
	return (
		<Provider>
			<Header />
			<List />
			{/* <Info/> */}
		</Provider>
	)
}