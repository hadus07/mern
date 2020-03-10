import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import MUListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

export function ListItem() {

	return (
		<MUListItem button>
			<>
				<ListItemAvatar>
					<Avatar>
						<Typography variant='button'>AP</Typography>
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Work" secondary="Jan 7, 2014" />
			</>
			<ChevronRightIcon />
		</MUListItem>
	)
}
