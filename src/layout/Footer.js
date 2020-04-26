import React from 'react'
import styled from 'styled-components'
import A from "../components/links/A";
import {FaHeart} from "react-icons/fa";

const FooterContainer = styled.footer`
	padding: 20px;
	height: 35px;
	display: flex;
	background-color: whitesmoke;
	flex-direction: row;
	justify-content: center;
`

const FooterItem = styled.div`

`

const Heart = styled.span`
	color: #4fbaff;
	font-size: .8em;
`

const Footer = () => {
	return (
		<FooterContainer>
			<FooterItem>
				made with <Heart><FaHeart/></Heart> by <A href="https://github.com/leahferrell">leah</A>
			</FooterItem>
		</FooterContainer>
	)
}

export default Footer
