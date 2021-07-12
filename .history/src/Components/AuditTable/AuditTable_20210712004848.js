import React from 'react';
import { Redirect } from 'react-router';
import { log } from '../../data/mock_data';
import { useState } from 'react';
import { useTable } from 'react-table';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import DauplarButton from '../Core/DauplarButton';
import {useScreenWidth} from '../../hooks/useScreenWidth'

export default function AuditTable(userInfo) {
	const [logValues, setDisplayedLogs] = useState(log);

	const screenWidth: number = useScreenWidth();

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
				<Navbar
					className='bg-light'
					style={{
						position: 'fixed',
						top: '0px',
						zIndex: '2',
						width: screenWidth,
						left: '0px',
					}}>
					<h3 style={{ color: 'black' }}>Audit Table</h3>
					<Nav className='ml-auto'/>
					<Form inline>
						<Form.Check type='checkbox' label='My Incidents' style={{color: 'black', paddingLeft: '10px'}} />
						<FormControl type='text' placeholder='Search' className='mr-sm-2' />
						<DauplarButton variant='outline-success' text='Search' />
					</Form>
				</Navbar>

				<Row>
					<Col>
						<table
							{...getTableProps()}
							style={{ width: '700px', marginTop: '60px' }}>
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
