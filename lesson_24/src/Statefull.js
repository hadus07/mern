import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export class Statefull extends React.Component {

	state = {
		value: 'Home'
	}

	componentDidMount() {
		document.title = this.state.value
	}

	componentDidUpdate() {
		document.title = this.state.value
	}

	handleChange = e => {
		this.setState({ value: e.target.value })
	}

	render() {
		const { value } = this.state
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">
						<input
							value={value}
							onChange={this.handleChange}
						/>
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}