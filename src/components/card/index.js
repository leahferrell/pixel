import styled from 'styled-components'
import React from "react";
import H2 from "../text/H2";
import {ButtonPrimary} from "../button";

const CardTemplate = styled.div`
	color: whitesmoke;
	margin: 20px;
	border-radius: 5px;
	text-align: left;
	padding: 10px;
	border: none;
	max-width: ${props => props.width ? props.width : 'auto'};
	font-family: 'Raleway', sans-serif;
	font-weight: 400;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Title = styled(H2)`
	color: #24252b;
`

const Text = styled.div`
	color: #24252b;
	margin: 0 0 40px 0;
`

export const Card = ({title, content, buttonText, size}) => {
	return (
		<CardTemplate width={size}>
			<Title>{title}</Title>
			<Text>{content}</Text>
			<ButtonPrimary>{buttonText}</ButtonPrimary>
		</CardTemplate>
	)
}
