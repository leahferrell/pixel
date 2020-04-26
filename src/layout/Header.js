import React, {useState} from 'react'
import styled from 'styled-components'
import NavBar from "./NavBar";
import {ButtonPrimaryPill} from "../components/button";
import {IoIosClose, IoIosMenu} from "react-icons/io"
import ImageLogo from "../components/image/ImageLogo";

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 5;
`;

const HeaderFlexContainer = styled.header`
	background-color: #24252A;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	padding: 30px 10%;
	align-content: space-between;
`

const MenuToggleContainer = styled.button`
	font-size: 2em;
	color: whitesmoke;
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	order: 2;

	&:hover, &:focus, &:active {
		cursor: pointer;
		border: none;
		outline: 0;
	}

	@media(min-width: 900px) {
		display: none;
	}
`

const ContactButton = styled.a`
	text-align: center;
	display: ${props => props.isExpanded ? 'inline-block' : 'none'};
	width: 100%;
	order: 5;
	margin: 10px;

	@media(min-width: 900px) {
		width: auto;
		display: inline-block;
	}
`

const MenuToggle = ({isExpanded, onClick}) => {
	const menuIcon = isExpanded ? <IoIosClose/> : <IoIosMenu/>;

	return (
		<MenuToggleContainer onClick={onClick}>
			{menuIcon}
		</MenuToggleContainer>
	);
};

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleClicked = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<HeaderContainer>
			<HeaderFlexContainer>
				<a href="/">
					<ImageLogo size={40} src="logo192.png" alt="logo" />
				</a>
				<NavBar isExpanded={isExpanded} />
				<ContactButton isExpanded={isExpanded} href="/contact">
					<ButtonPrimaryPill>Contact</ButtonPrimaryPill>
				</ContactButton>
				<MenuToggle isExpanded={isExpanded} onClick={toggleClicked}/>
			</HeaderFlexContainer>
		</HeaderContainer>
	)
};

export default Header
