import React from 'ramda'
import './index.css'

const Button = (props) => {
	console.log(props)
	return (
		<button
			onClick={props.onClick}
			className={props.outline ? 'outline' : 'normal'}
		>
			{props.title}
		</button>
	)
}

export default Button
