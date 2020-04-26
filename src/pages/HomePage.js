import React from 'react'
import styled from 'styled-components'
import H1 from '../components/text/H1'
import {Card} from "../components/card";

const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const Home = styled.div`
	background-color: whitesmoke;
	padding: 20px;
`

const HomePage = ({children}) => {
	return (
		<HomePageContainer>
			<Home>
				<H1>Template Project</H1>
				<p>Add some text n stuff here</p>
				<Card
					title="A cool project"
					content="An equally cool description here that makes you want to read more."
					buttonText={<a href="/articles">View more</a>}
				/>
				<Card
					title="Another cool project"
					content="Unfortunately this project must have gotten deleted. Or it was never added."
					buttonText={<a href="/deleted-project">View more</a>}
				/>
			</Home>
		</HomePageContainer>
	)
}

export default HomePage
