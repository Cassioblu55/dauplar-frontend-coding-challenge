import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useInput } from '../../hooks/input';
import DauplarButton from '../Core/DauplarButton';
import { useHistory } from 'react-router-dom';
import { users } from '../../data/mock_data';

export default function Login({ setUserInfo }) {
	const usernameInput = useInput('');
	const passwordInput = useInput('');
	const history = useHistory();

	function handleSubmit(event) {
		event.preventDefault();

		if (
			users[usernameInput.value] !== undefined &&
			users[usernameInput.value].password === passwordInput.value
		) {
			usernameInput.setErrorMessage(undefined);
			setUserInfo({
				id: users[usernameInput.value].id,
				username: usernameInput.value,
			});
			history.push('');
		} else {
			setUserInfo(undefined);
			usernameInput.setErrorMessage('Invalid username or password');
		}
	}

	return (
		<>
			<Form style={{ paddingTop: '10px' }}>
				<img
					alt='Dauplar'
					src='https://blog.daupler.com/hs-fs/hubfs/Daupler_Oct_2019/Images/Home/logo-f.png?width=816&name=logo-f.png'
					style={{ paddingBottom: '10px', paddingTop: '20px' }}
				/>
				<Row className='justify-content-md-center'>
					<h2 className='loginHeader'>Login</h2>
				</Row>
				<Row className='justify-content-md-center'>
					<Col md={6}>
						<Form.Group controlId='formBasicUsername'>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Username'
								{...usernameInput.bind}
								name='Username'
								isInvalid={usernameInput.errorMessage}
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
				<Row>
					<Col style={{color: 'red', fontSize: '14px', paddingBottom: '5px'}} md={{ span: 6, offset: 3 }}>{usernameInput.errorMessage}</Col>
				</Row>

				<Row className='justify-content-md-center'>
					<Col md={{ span: 6, offset: 3 }}>
						<DauplarButton
							onClick={handleSubmit}
							clickOnEnter={true}
							disabled={!passwordInput.value || !usernameInput.value}
							text='Login'
						/>
					</Col>
				</Row>
			</Form>
		</>
	);
}
