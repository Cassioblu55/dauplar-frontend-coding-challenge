import { useState } from 'react';

export const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);
    const [errorMessage, setErrorMessage] = useState('');

	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: (event) => {
				setValue(event.target.value);
			},
		},
		errorMessage,
        setErrorMessage,
	};
};
