import React from 'react'
import H2 from "../text/H2";
import {Section} from "../Section";
import {
	BadgeDanger,
	BadgeInfo,
	BadgeLight,
	BadgePrimary,
	BadgeSecondary,
	BadgeSuccess
} from "./index";
import H1 from "../text/H1";
import {ButtonPrimary} from "../button";
import {AlertSecondary} from "../alert";

const BadgeSection = () => {
	return (
		<React.Fragment>
			<H2>Badges</H2>
			<Section>
				<H1>Testing <BadgePrimary>Primary</BadgePrimary></H1>
				<H2>Testing <BadgeSecondary>Secondary</BadgeSecondary></H2>
				<h3>Testing <BadgeSuccess>Success</BadgeSuccess></h3>
				<h4>Testing <BadgeDanger>Success</BadgeDanger></h4>
				<ButtonPrimary>Testing <BadgeLight>Success</BadgeLight></ButtonPrimary>
				<AlertSecondary>Testing <BadgeInfo>Info</BadgeInfo></AlertSecondary>
			</Section>
		</React.Fragment>
	)
};

export default BadgeSection
