import styled from "styled-components";
import H2 from "../../components/text/H2";
import React from "react";
import {IoIosChatbubbles, IoIosClose} from "react-icons/io";
import {MdExpandLess} from "react-icons/md";

const ChatboxHeaderContainer = styled.div`
	display: flex;
	padding: 10px;
	flex-direction: row;
	background-color: #24252b;
	border-radius: 5px 5px 0 0;
	color: whitesmoke;
`

const LeftAlignedItems = styled.div`
	display: flex;
	flex-direction: row;
	flex-grow: 2;
	align-items: center;
`

const RightAlignedItems = styled.div`
	display: flex;
	flex-direction: row;
	flex-grow: 2;
	align-items: center;
	justify-content: flex-end;
`

const Title = styled(H2)`
	margin: 0 10px;
	padding: 0;
	color: whitesmoke;
`

const Icon = styled.div`
	font-size: 1.5em;
	display: flex;
	align-items: center;
`

const MinimizeToggle = styled.button`
	font-size: inherit;
	color: inherit;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 1.5em;
	padding: 0;
	margin: 0;
	order: 2;

	&:hover, &:active {
		cursor: pointer;
		border: 1px solid whitesmoke;
		outline: 0;
		font-weight: bold;
	}

	&:focus {
		outline: 0;
	}

	&:active {
		cursor: pointer;
		border: 1px solid transparent;
		color: #24252b;
		outline: 0;
		background-color: whitesmoke;
		font-weight: bold;
	}
`

const ChatboxHeader = ({onMinimize, isExpanded}) => {
	const icon = isExpanded ? <IoIosClose/> : <MdExpandLess/>

	return (
		<ChatboxHeaderContainer>
			<LeftAlignedItems>
				<Icon><IoIosChatbubbles/></Icon>
				<Title>Chat Box</Title>
			</LeftAlignedItems>
			<RightAlignedItems>
				<MinimizeToggle onClick={onMinimize}><Icon>{icon}</Icon></MinimizeToggle>
			</RightAlignedItems>
		</ChatboxHeaderContainer>
	)
}

export default ChatboxHeader
