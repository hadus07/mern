import React from 'react'
import { useStyles } from '../styles'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import { Link } from 'react-router-dom'

export function User(props) {
	const classes = useStyles()
	return (
		<Link
			className={classes.link}
			to={{ pathname: '/info', state: props.user}}
		>
			<ListItem className={classes.user} alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src={props.user.picture.medium} />
				</ListItemAvatar>
				<ListItemText
					primary={`${props.user.name.first} ${props.user.name.last}`}
					secondary={props.user.email}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</Link>
	)
}