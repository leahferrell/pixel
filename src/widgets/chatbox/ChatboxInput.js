import styled from "styled-components";
import ImageLogo from "../../components/image/ImageLogo";
import React from "react";
import {FaRegSmile} from "react-icons/fa";
import {Icon} from "../../components/text/Icon";

const InputBoxContainer = styled.div`
	display: ${props => props.isExpanded ? 'flex' : 'none'};
	padding: 10px;
	flex-direction: row;
	background-color: whitesmoke;
	border-top: 1px lightgrey solid;
	border-radius: 0 0 5px 5px;
	color: lightgrey;
`

const Input = styled.input`
	background-color: transparent;
	border: none;
	flex-grow: 2;
	margin: 0 10px;
	color: #24252c;
	padding: 10px;
`

const InputBox = ({isExpanded}) => {
	return (
		<InputBoxContainer isExpanded={isExpanded}>
			<ImageLogo size={30} src="logo192.png" alt="logo" />
			<Input placeholder="Type a message..." />
			<Icon><FaRegSmile/></Icon>
		</InputBoxContainer>
	)
}

export default InputBox
