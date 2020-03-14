/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { api } from '../../api'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { useLocation, useHistory } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useInfoStyles } from './style'

export function Info() {
	const history = useHistory()
	const classes = useInfoStyles()
	const { state } = useLocation()
	const [info, setInfo] = React.useState(null)

	React.useEffect(() => {
		api(`companies/${state}`, true)
			.then(res => {
				setInfo(res)
			})
			.catch(err => console.log(err))
	}, [])

	return info ? (
		<Paper className={classes.root}>
			<Typography variant='h3'>{info.name}</Typography>
			<a href={`https://${info.company_url}`} target='_blank'>
				<Typography variant='overline' color='secondary'>
					{info.company_url}
				</Typography>
			</a>
			<div className={classes.space}/>
			<MyChip label={info.ticker} />
			<MyChip label={info.business_phone_no} />
			<MyChip label={info.ceo} />
			<MyChip label={info.sector || info.industry_category || 'N/A'} />
			<MyChip label={`${info.hq_country} ${info.hq_state}`}/>
			<MyChip label={info.business_address}/>
			<div className={classes.space}/>
			<Typography variant='body1'>
				{info.short_description || info.long_description}
			</Typography>
			<div className={classes.space}/>
			<div className={classes.row}>
				<Button variant='contained' color='primary'>
					Company News
				</Button>
				<Button variant='contained' onClick={history.goBack}>
					Go Back
				</Button>
			</div>
		</Paper>
	) : <LinearProgress color='secondary' />
}

function MyChip({ label }) {
	return (
		<Chip
			label={label}
			color='primary'
			variant='outlined'
			style={{marginBottom: 6, marginRight: 10}}
		/>
	)
}