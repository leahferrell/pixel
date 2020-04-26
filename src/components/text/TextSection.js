import React from 'react'
import H2 from "../text/H2";
import {Section} from "../Section";
import H1 from "./H1";

const TextSection = () => {
	return (
		<React.Fragment>
			<H2>Text</H2>
			<Section>
				<H1>Header 1</H1>
				<H2>Header 2</H2>
				<p>Paragraph</p>
				<code>code</code>
			</Section>
		</React.Fragment>
	)
};

export default TextSection
