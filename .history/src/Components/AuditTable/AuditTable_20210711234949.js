import React from 'react';
import { Redirect } from 'react-router';
import { log } from '../../data/mock_data';
import { useState } from 'react';

export default function AuditTable(userInfo) {
	const [logValues, setDisplayedLogs] = useState(log);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Column 1',
				accessor: 'division', 
			},
			{
				Header: 'Column 2',
				accessor: 'col2',
			},
		],
		[]
	);

	if (userInfo === undefined) {
		return <Redirect to='/login' />;
	} else {
		return (
			<>
				<h3 style={{ paddingTop: '20px' }}>Audit Table</h3>
			</>
		);
	}
}
