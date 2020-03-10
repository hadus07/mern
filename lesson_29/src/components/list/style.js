import { theme as myTheme } from '../../theme'
import { makeStyles } from '@material-ui/core/styles'

export const useListStyles = makeStyles(theme => ({
	root: {
		marginTop: 20,
		width: myTheme.pageWidth,
		marginLeft: myTheme.pageOffset,
		backgroundColor: theme.palette.background.paper,
	},
}))