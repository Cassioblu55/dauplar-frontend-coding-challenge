import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { withRouter } from 'react-router-dom';


class SearchBar extends Component {
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
				<title>
					{this.state.titlePrefix}Dropbox | Shoeber.net | United States
				</title>
				<link
					rel='canonical'
					href='https://https://www.app.shoeber.graffititech.co/#/'
				/>
			</Helmet>
		);
	}
}

export default withRouter(SearchBar);
