import React from 'react'
import H2 from "../text/H2";
import {Section} from "../Section";
import {Card} from "./index";

const CardSection = () => {
	return (
		<React.Fragment>
			<H2>Cards</H2>
			<Section>
				<Card
					title="Title"
					content="Some kind of further exciting text could go in here. Or it could just not. Whatever floats your boat, man."
					buttonText="Explore"
					size="400px"
				/>
			</Section>
		</React.Fragment>
	)
};

export default CardSection
