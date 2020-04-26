import React from 'react'
import H2 from "../text/H2";
import {Section} from "../Section";
import A from "./A";

const LinksSection = () => {
	return (
		<React.Fragment>
			<H2>Links</H2>
			<Section>
				Checkout this <A href="#">link</A>
			</Section>
		</React.Fragment>
	)
};

export default LinksSection
