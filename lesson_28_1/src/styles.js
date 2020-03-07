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
		height: 360,
		filter: 'blur(3px)',
	},
	link: {
		color: 'unset',
		textDecoration: 'none',
	},
	progress: {
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		display: 'flex',
		overflow: 'hidded',
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
	},
})