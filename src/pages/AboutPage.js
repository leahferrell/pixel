import React from 'react'
import styled from 'styled-components'
import H1 from '../components/text/H1'
import H2 from "../components/text/H2";

const AboutPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const About = styled.div`
	background-color: whitesmoke;
	padding: 20px;
`

const UL = styled.ul`

`

const LI = styled.li`
	color: #24252b;
`

const AboutPage = ({children}) => {
	return (
		<AboutPageContainer>
			<About>
				<H1>Hey there...</H1>
				I'm a pretty cool template project. Not sure what my purpose is yet though.
				Have a look around! Hopefully I provide some great boilerplate.
				<H2>Technologies used:</H2>
				<UL>
					<LI>react.js</LI>
					<LI>flexbox</LI>
					<LI>styled-components</LI>
				</UL>
			</About>
		</AboutPageContainer>
	)
}

export default AboutPage
