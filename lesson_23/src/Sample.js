import 'date-fns'
import './App.css'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Slider from '@material-ui/core/Slider'
import Switch from '@material-ui/core/Switch'
import DeleteIcon from '@material-ui/icons/Delete'

export class App extends Component {

	state = {
		enabled: false
	}

	handleSwitch = e => {
		this.setState({ enabled: e.target.checked })
	}
	
	render() {
		return (
			<>
				<Button
					size="large"
					color="secondary"
					variant="contained"
				>
					Primary
				</Button>
				<Button
					color="primary"
					variant="text"
				>
					Primary
				</Button>
				<Button
					size="small"
					color="primary"
					variant="outlined"
				>
					Primary
				</Button>
				<Button
					variant="contained"
					color="secondary"
					endIcon={<DeleteIcon />}
				>
					Delete
				</Button>	
				<Slider
					defaultValue={30}
					getAriaValueText={v => '30C'}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={10}
					marks
					min={10}
					max={110}
				/>
				<Switch
					checked={this.state.enabled}
					onChange={this.handleSwitch}
					color="primary"
				/>
			</>
		)
	}
}