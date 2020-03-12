import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useInfoStyles } from './style'

export function Info() {
	const classes = useInfoStyles()
	return (
		<Paper className={classes.root}>
			<Typography variant='h3'>Apple Inc</Typography>
			<div className={classes.row}>
			<Typography variant='overline'>AAPL</Typography>
				<Typography variant='overline'>(408) 996-1010</Typography>
				<a href={''}>
					<Typography variant='overline'>apple.com</Typography>
				</a>
			</div>
			<div className={classes.space}/>
			<Typography variant='h6'>CEO: Tim Cook</Typography>
			<Typography variant='h6'>SECTOR: Electronic Equipment</Typography>
			<Typography variant='h6'>ADDRESS: Address</Typography>
			<div className={classes.space}/>
			<Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur assumenda laudantium voluptas dolores saepe exercitationem, harum fugit modi ab?</Typography>
			<div className={classes.space}/>
			<div className={classes.row}>
				<Button variant='contained' color='primary'>Company News</Button>
				<Button variant='contained' >Go Back</Button>
			</div>
		</Paper>
	)
}