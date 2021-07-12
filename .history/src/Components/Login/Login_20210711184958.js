import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useInput } from '../../hooks/input';
import {  Button } from 'react-bootstrap';


export default function Login() {
	const emailInput = useInput('');
    const passwordInput = useInput('');

    function handleSubmit(event) {
			event.preventDefault();

			if (emailInput.value && passwordInput.value) {
				const accountApi = ShoeberBackendApi.getAccountApi();
				const promise = accountApi.accountLoginPost({
					email: emailInput.value,
					password: passwordInput.value,
				});
				setLoading(true);
				promise.then(
					(response) => {
						const data = response.data;
						if (
							data !== undefined &&
							data.token !== undefined &&
							data.ttl_in_millis !== undefined &&
							data.user_type !== undefined
						) {
							setLogin(data.token, data.ttl_in_millis, data.user_type);

							setLoading(false);

							setErrorMessage(undefined);

							let currentRedirectTo = redirectTo;
							siteAttemptedWithNoLoginManager.reset();

							history.push(currentRedirectTo);
						} else {
							setErrorMessage('You are unable to log in at this time.');
							setLoading(false);
							logout();
						}
					},
					(failedResponse) => {
						setErrorMessage('Email or password incorrect');
						setLoading(false);
					}
				);
			} else {
				setErrorMessage('Password and email required');
			}
		}

	return (
		<>
			<Form style={{ paddingTop: '10px' }}>
				<img
					alt='Dauplar'
					src='https://blog.daupler.com/hs-fs/hubfs/Daupler_Oct_2019/Images/Home/logo-f.png?width=816&name=logo-f.png'
					height='220'
					style={{ paddingBottom: '10px' }}
				/>
				<Row className='justify-content-md-center'>
					<h2 className='loginHeader'>Login</h2>
				</Row>
				<Row className='justify-content-md-center'>
					<Col md={6}>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								{...emailInput.bind}
								name='email'
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row className='justify-content-md-center'>
					<Col md={6}>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								{...passwordInput.bind}
								name='password'
								autoComplete='currentPassword'
							/>
						</Form.Group>
					</Col>
				</Row>

				<Row className='justify-content-md-center'>
					<Col>
						<Button
							onClick={handleSubmit}
							text='Submit'
							clickOnEnter={true}
						/>
					</Col>
				</Row>
			</Form>
		</>
	);
}
