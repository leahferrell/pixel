import React from 'react'
import H2 from "../../components/text/H2";
import {CardSection} from "../../components/Section";
import PercentageCircle from "./circles";

const ChartsDemo = () => {
	return (
		<React.Fragment>
			<H2>Charts</H2>
			<CardSection>
				<PercentageCircle start={0} end={70} interval={500}/>
			</CardSection>
		</React.Fragment>
	)
};

export default ChartsDemo
