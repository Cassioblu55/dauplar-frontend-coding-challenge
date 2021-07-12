import { HelmetProvider } from 'react-helmet-async';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import { DauplarHelmet } from './Components/DauplarHelmet';
import { Container } from 'react-bootstrap';
import { Login } from './Components/Login';
import { AuditTable } from './Components/AuditTable/A';
import { PageNotFound } from './Components/PageNotFound';
import { Route } from 'react-router-dom';

function App() {
	return (
		<HelmetProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<DauplarHelmet />

				<Container className='App'>
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/' component={AuditTable} />
						<Route path={'/404'} component={PageNotFound} />
						<Redirect to='/404' />
					</Switch>
				</Container>
			</ThemeProvider>
		</HelmetProvider>
	);
}

export default withRouter(App);
