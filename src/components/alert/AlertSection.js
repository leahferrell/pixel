import React from 'react'
import H2 from "../text/H2";
import {Section} from "../Section";
import {AlertPrimary, AlertSecondary} from "./index";

const AlertSection = () => {
	return (
		<React.Fragment>
			<H2>Alerts</H2>
			<Section>
				<AlertPrimary>
					Default
				</AlertPrimary>
				<AlertSecondary>
					Secondary
				</AlertSecondary>
			</Section>
		</React.Fragment>
	)
};

export default AlertSection
