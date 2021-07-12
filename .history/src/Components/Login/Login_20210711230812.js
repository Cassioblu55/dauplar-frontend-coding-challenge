import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useInput } from '../../hooks/input';
import DauplarButton from '../Core/DauplarButton';
import { Redirect } from 'react-router';

export default function Login(
   setUserInfo 
) {
	const emailInput = useInput('');
	const passwordInput = useInput('');

	function handleSubmit(event) {
		event.preventDefault();
        setUserInfo(emailInput.value);
		return <Redirect to='/'
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
					<Col md={{ span: 6, offset: 3 }}>
						<DauplarButton
							onClick={handleSubmit}
							clickOnEnter={true}
							disabled={!passwordInput.value|| !emailInput.value}
							text='Login'
						/>
					</Col>
				</Row>
			</Form>
		</>
	);
}