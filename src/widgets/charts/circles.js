import React from 'react'
import ChangingProgressProvider from "./ChangingProgressProvider";
import {
	CircularProgressbar
} from "react-circular-progressbar";
import "./circle-styles.css";

const PercentageCircle = ({start, end, interval}) => {
	return (
		<ChangingProgressProvider values={[start, end]} interval={interval}>
			{percentage => (
				<CircularProgressbar value={percentage} text={`${percentage}%`} />
			)}
		</ChangingProgressProvider>
	)
}

export default PercentageCircle
