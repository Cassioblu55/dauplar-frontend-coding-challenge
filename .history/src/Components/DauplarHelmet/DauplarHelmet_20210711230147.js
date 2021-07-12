import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { withRouter } from 'react-router-dom';


class DauplarHelmet extends Component {
	render() {
		return (
			<Helmet>
				<meta charSet='utf-8' />
				<title>
					Event Audit
				</title>
			</Helmet>
		);
	}
}

export default withRouter(DauplarHelmet);
