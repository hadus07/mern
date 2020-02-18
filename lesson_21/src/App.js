import './App.css'
import React, { Component } from 'react'

class Button extends Component {
	
	// componentDidMount() {
	// 	console.log(`${this.props.title} did mount`)
	// }

	// componentDidUpdate() {
	// 	console.log(`${this.props.title} did update`)
	// }

	componentWillUnmount() {
		console.log(`${this.props.title} will unmount`)
	}

	render() {
		return (
			<button
				onClick={this.props.onClick}
			>
				{this.props.title}
			</button>
		)
	}
}

export class App extends Component {

	state = {
		okVisisble: true
	}

	// componentDidMount() {
	// 	console.log('app did mount')
	// }

	// componentDidUpdate() {
	// 	console.log('app did update')
	// }

	toggle = () => {
		this.setState({ okVisisble: !this.state.okVisisble })
	}

	render() {
		return this.state.okVisisble
			? <Button title="OK" onClick={this.toggle}/>
			: <p onClick={this.toggle}>Cancel</p>
	}
}