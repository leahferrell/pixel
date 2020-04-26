import React from 'react'
import H2 from "../../components/text/H2";
import {CardSection} from "../../components/Section";
import SignInWidget from "./SignInWidget";

const SignInDemo = () => {
	return (
		<React.Fragment>
			<H2>Sign in</H2>
			<CardSection>
				<SignInWidget/>
			</CardSection>
		</React.Fragment>
	)
};

export default SignInDemo
