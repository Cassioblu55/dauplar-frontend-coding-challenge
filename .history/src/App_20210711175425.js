import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<HelmetProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<ShoeberHelmet />
				<AlertManager />
				<Navigation
					openRunningReceipt={openRunningReceipt}
					setOpenRunningReceipt={setOpenRunningReceipt}
					setActiveEditItem={setActiveEditItem}
				/>
				<Container className='App'>
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/locations' component={LocationMap} />
						<Route exact path='/signup' component={Signup} />
						<Route exact path='/profile' component={Profile} />
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/choice' component={ChoicesPage} />
						<Route exact path='/home'>
							<Home
								setOpenRunningReceipt={setOpenRunningReceipt}
								activeEditItem={activeEditItem}
								setActiveEditItem={setActiveEditItem}
							/>
						</Route>
						<Route path='/employee' component={EmployeePortal} />
						<Route path='/checkout'>
							<Checkout setActiveEditItem={setActiveEditItem} />
						</Route>
						<Route path='/verify/email' component={VerifyEmail} />
						<Route path='/my/orders' component={MyOrders} />
						<Route path={'/404'} component={ShoeberPageNotFound} />
						<Redirect to='/404' />
					</Switch>
				</Container>
			</ThemeProvider>
		</HelmetProvider>
	);
}

export default App;
