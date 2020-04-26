import React from 'react'
import styled from 'styled-components'
import H1 from '../components/text/H1'
import AlertSection from "../components/alert/AlertSection";
import ButtonSection from "../components/button/ButtonSection";
import BadgeSection from "../components/badge/BadgeSection";
import CardSection from "../components/card/CardSection";
import FontSection from "../components/fonts/FontsSection";
import LinksSection from "../components/links/LinksSection";
import TextSection from "../components/text/TextSection";
import MenuSection from "../components/menu/MenuSection";

const ComponentsPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const Components = styled.div`
	background-color: whitesmoke;
	padding: 20px;
`

const ComponentsPage = () => {
	return (
		<ComponentsPageContainer>
			<Components>
				<H1>Components Style Sheet</H1>
				<AlertSection/>
				<ButtonSection/>
				<BadgeSection/>
				<CardSection/>
				<FontSection/>
				<LinksSection/>
				<MenuSection/>
				<TextSection/>
			</Components>
		</ComponentsPageContainer>
	)
}

export default ComponentsPage
