import {useEffect, useState} from "react";

const ChangingProgressProvider = ({children, interval, values}) => {
	const [valuesIndex, setValuesIndex] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setValuesIndex((valuesIndex + 1) % values.length)
		}, interval);
	}, []);

	return (
		children(values[valuesIndex])
	)
}

export default ChangingProgressProvider;
