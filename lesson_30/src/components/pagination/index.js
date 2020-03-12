import React from 'react'
import { Context } from '../../Context'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'


export function Pagination() {
	const {
		nextPage,
		pageSize,
		setPageSize,
		setNextPage,
		loadCompanies,
	} = React.useContext(Context)
	const [page, setPage] = React.useState(0)

	const handleChangePage = (event, newPage) => {
		let backwards = false
		if (page > newPage) {
			backwards = true
		}
		loadCompanies(newPage, backwards)
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setPage(0)
		setNextPage('')
		setPageSize(parseInt(event.target.value, 10))
	}

	return (
		<Paper elevation={4}>
			<TablePagination
				page={page}
				component="div"
				rowsPerPage={pageSize}
				count={Number.MAX_VALUE}
				style={{ marginBottom: 10 }}
				rowsPerPageOptions={[5, 10]}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
				labelDisplayedRows={({ from, to }) => `${from} - ${to}`}
			/>
		</Paper>
	)
}
