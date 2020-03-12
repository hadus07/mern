import { theme } from '../../theme'
import { makeStyles } from '@material-ui/styles'

export const useInfoStyles = makeStyles({
	root: {
		padding: 30,
		marginTop: theme.top,
		width: theme.pageWidth,
		marginLeft: theme.pageOffset,
	},
	space: {
		height: 20,
	},
	row: {
		display: 'flex',
		'& > *': {
			marginRight: 16,
		},
	}
})