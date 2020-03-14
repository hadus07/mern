import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import MUListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useListItemStyles } from './style'

export function ListItem({ company }) {
	const classes = useListItemStyles()
	return (
		<Link
			className={classes.link}
			to={{ pathname: '/info', state: company.ticker }}
		>
			<MUListItem button>
				<>
					<ListItemAvatar>
						<Avatar className={classes.avatar}>
							<Typography variant='button'>
								{company.name.slice(0, 2).toUpperCase()}
							</Typography>
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={company.name}
						secondary={company.ticker}
					/>
				</>
				<ChevronRightIcon />
			</MUListItem>	
		</Link>
	)
}
