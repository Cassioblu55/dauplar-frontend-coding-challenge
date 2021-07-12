import { useState } from 'react';

const LoadOnce = () => {
	const [load, setLoading] = useState(true);

	function canLoad() {
		setLoading(false);
		return load;
	}

	function reset() {
		setLoading(true);
	}

	return { canLoad: canLoad, reset: reset };
};

export default LoadOnce;
