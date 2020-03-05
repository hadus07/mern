import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
	cont: { width: '60vw', marginLeft: '20vw' },
	user: {
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#fafafa'
		},
	},
	image: {
		height: 360
	},
	link: {
		color: 'unset',
		textDecoration: 'none',
	},
})