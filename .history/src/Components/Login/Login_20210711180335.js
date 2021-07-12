import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {

	render() {
		return (
			<Helmet>
				<meta charSet='utf-8' />
				<title>{this.state.titlePrefix}Event Audit</title>
			</Helmet>
		);
	}
}

export default withRouter(DauplarHelmet);
