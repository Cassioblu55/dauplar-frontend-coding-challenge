import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';

export default function Login(){
	const emailInput = useInput('');
    
		return (
			<>
				<Form style={{ paddingTop: '10px' }}>
					<img
						alt='Shoeber Dropbox'
						src='https://s3.us-east-2.amazonaws.com/shoeber.html.helpers.graffititech.co/images/static/shoeberLogoLarge.png '
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
							<ShoeberButton
								onClick={handleSubmit}
								text='Submit'
								clickOnEnter={true}
							/>
						</Col>
					</Row>
					{errorMessage && <ShoeberErrorMessage message={errorMessage} />}
					<ShoeberLink to='/signup' text='Create Account' />
				</Form>
			</>
		);
	

}