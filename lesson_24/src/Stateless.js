import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export function Stateless(props) {

	const [value, setValue] = useState('Home')
	const [age, setAge] = useState(20)
	
	function handleChange(e) {
		setValue(e.target.value)
	}

	useEffect(() => {
		console.log('value changed')
		document.title = value
	}, [value])

	useEffect(() => {
		console.log('age changed')
	}, [age])

	function incrementAge() {
		setAge(age + 1)
	}

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">
						<input
							value={value}
							onChange={handleChange}
						/>
					</Typography>
				</Toolbar>
			</AppBar>

			<Button
				color='primary'
				variant='outlined'
				onClick={incrementAge}
			>
				Age: {age}
			</Button>
		</>
	)
}