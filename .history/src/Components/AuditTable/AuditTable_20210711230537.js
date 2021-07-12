import React, { Redirect } from 'react';

export default function AuditTable(
	userInfo
){
	if (userInfo. === undefined){
		return <Redirect to='/somewhere/else' />;

	}
	
	
	return <>AuditTable</>;
}
