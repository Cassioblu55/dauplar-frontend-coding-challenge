import React from 'react';
import { Redirect } from 'react-router';
import { log } from '../../data/mock_data';
import { useState } from 'react';

export default function AuditTable(userInfo) {
	const [log, setValue] = useState(log);
	
	
	if (userInfo === undefined) {
		return <Redirect to='/login' />;
	} else {
		return (
			<>
				<h3 style={{paddingTop: '20px'}}>Audit Table</h3>
			</>
		);
	}
}
