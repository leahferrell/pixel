import React from 'react'
import styled from 'styled-components'
import H1 from '../components/text/H1'
import SignInDemo from "../widgets/sign-in/SignInDemo";
import ChatboxDemo from "../widgets/chatbox/ChatboxDemo";
import ColorPickerDemo from "../widgets/color-picker/ColorPickerDemo";

const WidgetsPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const Widgets = styled.div`
	background-color: whitesmoke;
	padding: 20px;
`

const WidgetsPage = () => {
	return (
		<WidgetsPageContainer>
			<Widgets>
				<H1>Widgets Board</H1>
				<SignInDemo/>
				<ChatboxDemo/>
				<ColorPickerDemo/>
			</Widgets>
		</WidgetsPageContainer>
	)
}

export default WidgetsPage
