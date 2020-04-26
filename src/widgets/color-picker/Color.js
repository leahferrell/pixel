import styled from "styled-components";
import React from "react";

const ColorItem = styled.button`
	background-color: ${props => props.color};
	height: 3em;
	width: 3em;
	border: none;
	border-radius: 1.5em;
	padding: 0;
	margin: 0;

	&:hover, &:active {
		cursor: pointer;
	}

	&:focus {
		outline: 0;
	}
`

const ColorOutline = styled.div`
	background-color: ${props => props.color};
	border-radius: 2em;
	padding: 2px;
	border: 3px solid ${props => props.selected ? '#24252b' : 'transparent'};
	line-height: 0;

	&:hover, &:focus &:active {
		border-color: #24252b;
	}
`

const Color = ({color, onSelect, selected}) => {
	return (
		<ColorOutline selected={selected}>
			<ColorItem
				color={color}
				onClick={() => onSelect(color)}
			/>
		</ColorOutline>
	)
}

export default Color;
