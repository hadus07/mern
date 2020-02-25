import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

function useForm(initialValue) {
	const [value, setValue] = useState(initialValue)
	return { value, onChange: e => setValue(e.target.value) }
}

export function Form() {

	const username = useForm('')
	const email = useForm('')
	const password = useForm('')

	return (
		<>
			<Input {...username} name="username" label="Username"/>
			<Input {...email} name="email" label="Email" />
			<Input {...password} name="password" type="password" label="Password"/>
			<Button color='primary' variant='contained'>Submit</Button>
		</>
	)
}

// export class Form extends React.Component {

// 	state = {
// 		username: '',
// 		email: '',
// 		password: '',
// 	}

// 	handleChange = e => {
// 		this.setState({ [e.target.name]: e.target.value })
// 	}

// 	render() {
// 		const { username, email, password } = this.state
// 		return (
// 			<>
// 				<Input
// 					name="username"
// 					label="Username"
// 					value={username}
// 					onChange={this.handleChange}
// 				/>
// 				<Input
// 					name="email"
// 					label="Email"
// 					value={email}
// 					onChange={this.handleChange}
// 				/>
// 				<Input
// 					name="password"
// 					type="password"
// 					label="Password"
// 					value={password}
// 					onChange={this.handleChange}
// 				/>
// 				<Button
// 					color='primary'
// 					variant='contained'
// 				>
// 					Submit
// 				</Button>
// 			</>
// 		)
// 	}
// }

function Input(props) {
	return (
		<>
			<TextField
				{...props}
				size="small"
				margin="normal"
				variant="outlined"
				type={props.type || 'text'}
			/><br/>
		</>
	)
}