import React, { Component } from 'react'
import './Select.css'

export class Select extends Component {

	state = {
		pressed: false,
		selected: this.props.placeholder
			? { name: this.props.placeholder }
			: this.props.data[0],
	}

	componentDidMount() {
		console.log(this.props)
	}

	handleClick = () => {
		this.setState({ pressed: !this.state.pressed })
	}

	handleSelect = selected => {
		this.props.onSelect(selected)
		this.setState({ selected, pressed: false })
	}

	render() {
		const { data } = this.props
		const { pressed, selected } = this.state
		return (
			<div className="selectCont">
				<div
					onClick={this.handleClick}
					className={`
						display 
						${pressed ? 'active' : 'inactive'}
					`}
				>
					{selected.name}
				</div>
				<div className={`dropdown ${pressed ? 'visible' : '' }`}>
					{data.map(d => (
						<div
							key={d.value}
							onClick={() => this.handleSelect(d)}
							className={`
								item 
								${d.value === selected.value ? 'selected' : ''}
							`}
						>
							{d.name}
						</div>
					))}
				</div>
			</div>
		)
	}
}
