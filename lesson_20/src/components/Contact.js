import React from 'react'

const Contact = props => {
	console.log(props)
	return <h1>{props.children} {props.name}</h1>
}

export default Contact