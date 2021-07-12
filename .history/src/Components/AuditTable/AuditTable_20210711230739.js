import React from 'react';

import { Redirect, Route, Switch } from "react-router";


export default function AuditTable(
	userInfo
){
	if (userInfo.value === undefined){
		return <Redirect to='/login' />;

	}else{
		return <>AuditTable</>;

	}
	
	
}
