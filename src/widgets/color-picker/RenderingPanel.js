import styled from "styled-components";
import {BadgeDark} from "../../components/badge";
import H2 from "../../components/text/H2";
import React from "react";
import {IoIosClose} from "react-icons/io";

const RenderingPanelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Rendering = styled.div`
	background-color: ${props => props.color};
	flex-grow: 2;
`

const Close = styled.button`
	padding: 0;
	margin: 0;
	border: none;
	background: transparent;
	color: #343a42;
	font-size: 1em;
	line-height: 0;

	&:hover {
		cursor: pointer;
	}

	&:active, &:focus {
		outline: none;
	}
`

const RenderingPanel = ({color, onDeselect}) => {
	const title = color ? "You selected " : "Select a color";
	const colorTag = color
		? <span>
				<BadgeDark>{color}</BadgeDark>
				<Close onClick={onDeselect}><IoIosClose/></Close>
			</span>
		: ""

	return (
		<RenderingPanelContainer>
			<H2>{title}{colorTag}</H2>
			<Rendering color={color} onDeselect={onDeselect}/>
		</RenderingPanelContainer>
	)
}

export default RenderingPanel;
