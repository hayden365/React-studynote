import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter(prevCounter => prevCounter + 1);
			} else {
				setCounter(prevCounter => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [forwards]);

	return counter;
};

export default useCounter;

//로직이 구현될뿐 상태가 공유되지는 않음.
