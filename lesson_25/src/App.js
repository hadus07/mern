import React from 'react'
import { BrowserRouter, Link, Route, Switch, useRouteMatch } from 'react-router-dom'

export function App() {
	return (
		<BrowserRouter>
			<ul>
				<li>
					<MyLink to='/'>Home</MyLink>
				</li>
				<li>
					<MyLink to='/about'>About</MyLink>
				</li>
				<li>
					<MyLink to='/contact'>Contact</MyLink>
				</li>
			</ul>

			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

function MyLink(props) {
	let match = useRouteMatch({ path: props.to, exact: props.to === '/' })
	console.log(match)
	return (
		<>
			{match && '> '}
			<Link to={props.to}>{props.children}</Link>
		</>
	)
}

function Home() {
	return <h1>Home</h1>
}
function About() {
	return <h1>About</h1>
}
function Contact() {
	return <h1>Contact</h1>
}
