import React from 'react';
import { Redirect} from "react-router";


export default function AuditTable(
	userInfo
){
	if (userInfo === undefined){
		return <Redirect to='/login' />;

	}else{
		return <>AuditTable</>;

	}
}
