import React from 'react';
import { Redirect} from "react-router";
import { log } from '../../data/mock_data';


export default function AuditTable(
	userInfo
){
	if (userInfo === undefined){
		return <Redirect to='/login' />;

	}else{
		return (<>AuditTable</>);

	}
}
