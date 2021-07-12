import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ShoeberLink from './ShoeberLink';
import { useScreenType } from '../../hooks/useScreenType';

const Styled404Main = styled.h1`
	color: ${({ theme }) => theme.primaryHover};
	font-size: ${(props) => (props.mobile ? '100px' : '200px')};
`;

const Styled404Wrapper = styled.div`
	padding-top: ${(props) => (props.mobile ? '5px' : '25px')};
`;

const Styled404Message = styled.div`
	padding-bottom: ${(props) => (props.mobile ? '5px' : '10px')};
	font-weight: bold;
`;

function PageNotFound() {
	const screenType = useScreenType();

	return (
		<>
			<Row>
				<Col>
					<Styled404Wrapper mobile={screenType.isMobile}>
						<Styled404Main mobile={screenType.isMobile}>404</Styled404Main>
					</Styled404Wrapper>
				</Col>
			</Row>
			<Row>
				<Col>
					<Styled404Message>Oops! Sorry page not found.</Styled404Message>
				</Col>
			</Row>
			<Row>
				<Col>
					<ShoeberLink to='/' text='Go Back' />
				</Col>
			</Row>
		</>
	);
}

export default withRouter(ShoeberPageNotFound);
