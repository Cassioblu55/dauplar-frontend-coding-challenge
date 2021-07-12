import React, { Redirect } from 'react';
import { withRouter } from 'react-router-dom';

export default function AuditTable(
	userInfo
){
	if (userInfo === undefined){
		return <Redirect to='/somewhere/else' />;

	}
	
	
	return <>AuditTable</>;
}
