import './App.css'
import { Select } from './Select'
import React, { Component } from 'react'

let data = [
	{ name: 'Tiko', value: 'tiko' },
	{ name: 'Matiz', value: 'matiz' },
	{ name: 'Nexia', value: 'nexia' },
	{ name: 'Damas', value: 'damas' },
	{ name: 'Malibu', value: 'malibu' },
]

export class App extends Component {
	state = { selected: null }

	handleOnSelect = selected => {
		this.setState({ selected })
	}

	render() {
		const { selected } = this.state
		return (
			<>
				<h1>{selected && selected.name}</h1>
				<Select
					data={data}
					placeholder="Choose a car"
					onSelect={this.handleOnSelect}
				/>
			</>
		)
	}
}