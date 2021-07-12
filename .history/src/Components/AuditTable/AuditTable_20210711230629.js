import React, { Redirect } from 'react';

export default function AuditTable(
	userInfo
){
	if (userInfo.value === undefined){
		return <Redirect to='/somewhere/else' />;

	}else{
		return <>AuditTable</>;

	}
	
	
}
