import React from 'react'
import H2 from "../text/H2";
import {InlineSection, Section} from "../Section";
import {
	ButtonDanger,
	ButtonDark,
	ButtonInfo,
	ButtonPrimary,
	ButtonSecondary,
	ButtonSuccess,
	ButtonWarning
} from "./index";

const ButtonSection = () => {
	return (
		<React.Fragment>
			<H2>Buttons</H2>
			<Section>
				<InlineSection>
					<ButtonPrimary>Primary</ButtonPrimary>
					<ButtonSecondary>Secondary</ButtonSecondary>
					<ButtonDanger>Danger</ButtonDanger>
					<ButtonDark>Dark</ButtonDark>
					<ButtonInfo>Info</ButtonInfo>
					<ButtonWarning>Warning</ButtonWarning>
					<ButtonSuccess>Success</ButtonSuccess>
				</InlineSection>
			</Section>
		</React.Fragment>
	)
};

export default ButtonSection
