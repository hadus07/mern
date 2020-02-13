import React from 'react'
import './styles/App.css'
import Button from './components/button'

export function App(arg) {
	console.log(arg)
	return (
		<div className="hohlaganName">
			<Button title="OK" onClick={() => console.log('ok bosildi')}/>
			<Button title="Cancel" outline/>
			<Button title="Submit"/>
			<Button title="Delete" outline/>
		</div>
	)
}