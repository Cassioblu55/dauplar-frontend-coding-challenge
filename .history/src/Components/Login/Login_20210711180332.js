import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			titlePrefix: this.getTitlePrefix(),
		};
	}

	getTitlePrefix() {
		const envName = process.env.REACT_APP_ENV_NAME;
		if (envName === 'dev') {
			return 'Dev ';
		} else if (envName === 'prod') {
			return '';
		} else {
			return 'Local ';
		}
	}

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
