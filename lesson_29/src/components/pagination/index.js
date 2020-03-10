import React from 'react'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'


export function Pagination() {
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(5)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	return (
		<Paper elevation={4}>
			<TablePagination
				count={10}
				page={page}
				component="div"
				rowsPerPage={rowsPerPage}
				style={{ marginBottom: 10 }}
				rowsPerPageOptions={[5, 10]}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	)
}
