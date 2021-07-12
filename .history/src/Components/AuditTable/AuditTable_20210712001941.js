import React from 'react';
import { Redirect } from 'react-router';
import { log } from '../../data/mock_data';
import { useState } from 'react';
import { useTable } from 'react-table';
import { Row, Col } from 'react-bootstrap';

export default function AuditTable(userInfo) {
	const [logValues, setDisplayedLogs] = useState(log);

	const data = React.useMemo(() => logValues, [logValues]);

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

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	if (userInfo === undefined) {
		return <Redirect to='/login' />;
	} else {
		return (
			<>
				<Row>
					<Col>
						<h3 style={{ paddingTop: '20px', textAlign: 'center' }}>
							Asearch
						</h3>
					</Col>
				</Row>

				<Row>
					<Col>
						<h3 style={{ paddingTop: '20px', textAlign: 'center' }}>
							Audit Table
						</h3>
					</Col>
				</Row>

				<Row>
					<Col>
						<table {...getTableProps()} style={{ width: '700px' }}>
							<thead>
								{headerGroups.map((headerGroup) => (
									<tr
										{...headerGroup.getHeaderGroupProps()}
										style={{
											borderBottom: 'solid 3px black',
											background: 'aliceblue',
											color: 'black',
											textAlign: 'center',
											fontWeight: 'bold',
										}}>
										{headerGroup.headers.map((column) => (
											<th {...column.getHeaderProps()}>
												{column.render('Header')}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody {...getTableBodyProps()}>
								{rows.map((row) => {
									prepareRow(row);
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map((cell) => {
												return (
													<td
														{...cell.getCellProps()}
														style={{
															padding: '10px',
															border: 'solid 1px gray',
															background: 'white',
															textAlign: 'center',
															color: 'black',
														}}>
														{cell.render('Cell')}
													</td>
												);
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
					</Col>
				</Row>
			</>
		);
	}
}
