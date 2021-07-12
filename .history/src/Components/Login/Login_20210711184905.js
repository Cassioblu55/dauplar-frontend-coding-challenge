import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import { useInput } from '../../hooks/input';


export default function Login() {
	const emailInput = useInput('');
    onst passwordInput = useInput('');

	const emailInput = useInput('');


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
