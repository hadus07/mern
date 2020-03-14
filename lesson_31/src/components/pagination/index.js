import React from 'react'
import { Context } from '../../Context'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import TablePagination from '@material-ui/core/TablePagination'


export function Pagination({ data, onChangeData }) {
	const {
		page,
		setPage,
		loading,
		nextPage,
		pageSize,
		// companies,
		setPageSize,
		setNextPage,
		// loadCompanies,
	} = React.useContext(Context)

	const handleChangePage = (_event, newPage) => {
		let backwards = false
		let pageId = nextPage[nextPage.length - 1] || ''

		if (page >= newPage) {
			backwards = true
			pageId = nextPage[nextPage.length - 3] || ''
		}
	
		onChangeData(pageId, backwards)
		if (data.length <= pageSize) {
			setPage(newPage)
		}
	}

	const handleChangeRowsPerPage = event => {
		setPage(0)
		setNextPage([''])
		setPageSize(event.target.value)
	}

	return (
		<Paper elevation={4}>
			{loading && <LinearProgress />}
			<TablePagination
				page={page}
				component="div"
				rowsPerPage={pageSize}
				style={{ marginBottom: 10 }}
				rowsPerPageOptions={[5, 10]}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
				labelDisplayedRows={({ from, to }) => `${from} - ${to}`}
				count={data.length === pageSize
					? Number.MAX_VALUE
					: (nextPage.length - 2) * pageSize + data.length
				}
			/>
		</Paper>
	)
}
