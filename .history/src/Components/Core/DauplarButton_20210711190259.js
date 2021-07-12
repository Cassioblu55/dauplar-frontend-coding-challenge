import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import LoadOnce from '../../hooks/loadOnce';
import { makeId } from '../../utils/id';

export const StyledButton = styled.div`
	color: ${({ theme }) => theme.primaryDark};

	padding: 7px 10px 7px 10px;
	border-radius: 5px;
	display: inline-block;

	&:hover {
		color: ${(props) =>
			props.disabled
				? ({ theme }) => theme.primaryLight
				: props.secondary
				? ({ theme }) => theme.primaryLight
				: ({ theme }) => theme.primaryDark};

		background: ${(props) =>
			props.disabled
				? ({ theme }) => theme.secondaryDark
				: props.secondary
				? ({ theme }) => theme.grayThree
				: ({ theme }) => theme.primaryDark};

		cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	}

	background: ${(props) => ({ theme }) => theme.primaryLight}
`;

export default function DauplarButton({
	onClick = () => {
		console.error('Dauplar button action not set.');
	},
	text = 'Ok',
	disabled = false,
	secondary = false,
	styleOverride = {},
	clickOnEnter = false,
}) {
	const addEnterListener = LoadOnce();
	const removeEnterListener = LoadOnce();

	// eslint-disable-next-line no-unused-vars
	const [myId, setMyId] = useState(makeId());

	function handleClick(event) {
		if (disabled === false) {
			onClick(event);
		}
	}

	useEffect(() => {
		const listener = (event) => {
			if (event.code === 'Enter' || event.code === 'NumpadEnter') {
				let button = document.getElementById(myId);
				if (button) {
					button.click();
				}
			}
		};

		if (clickOnEnter && addEnterListener.canLoad()) {
			document.addEventListener('keydown', listener);
			removeEnterListener.reset();
		} else if (!clickOnEnter && removeEnterListener.canLoad()) {
			document.removeEventListener('keydown', listener);
			addEnterListener.reset();
		}
	}, [addEnterListener, clickOnEnter, myId, removeEnterListener]);

	return (
		<StyledButton
			id={myId}
			style={{ styleOverride }}
			secondary={secondary}
			disabled={disabled}
			onClick={handleClick}>
			{text}
		</StyledButton>
	);
}
