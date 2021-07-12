import React from 'react';
import { Redirect } from 'react-router';
import { log } from '../../data/mock_data';
import { useState } from 'react';
import { useTable } from 'react-table';

export default function AuditTable(userInfo) {
	const [logValues, setDisplayedLogs] = useState(log);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Division',
				accessor: 'division',
			},
			{
				Header: 'Issue ID',
				accessor: 'issue_id',
			},
			{
				Header: 'Event',
				accessor: 'event',
			},
			{
				Header: 'User',
				accessor: 'user',
			},
		],
		[]
	);

	const logTable = useTable({ columns, logValues });

	 const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
			logTable;

	if (userInfo === undefined) {
		return <Redirect to='/login' />;
	} else {
		return (
			<>
				<h3 style={{ paddingTop: '20px' }}>Audit Table</h3>
				<table {...getTableProps()}>
					<thead>
						{
							headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{
										headerGroup.headers.map((column) => (
											<th {...column.getHeaderProps()}>
												{
													column.render('Header')
												}
											</th>
										))
									}
								</tr>
							))
						}
					</thead>
					<tbody {...getTableBodyProps()}>
						{
							rows.map((row) => {
								// Prepare the row for display
								prepareRow(row);
								return (
									// Apply the row props
									<tr {...row.getRowProps()}>
										{
											// Loop over the rows cells
											row.cells.map((cell) => {
												// Apply the cell props
												return (
													<td {...cell.getCellProps()}>
														{
															// Render the cell contents
															cell.render('Cell')
														}
													</td>
												);
											})
										}
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</>
		);
	}
}
