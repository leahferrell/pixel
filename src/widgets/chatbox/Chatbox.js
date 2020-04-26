import React, {useState} from 'react'
import styled from 'styled-components'
import ConversationHistory from "./ChatboxHistory";
import InputBox from "./ChatboxInput";
import ChatboxHeader from "./ChatboxHeader";

const ChatboxCentered = styled.div`
	display: flex;
	justify-content: center;
	align-items: stretch;
`

const ChatboxContainer = styled.div`
	background-color: transparent;
	max-width: 500px;
	flex-grow: 2;
	border: none;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 5px;
`

const Chatbox = ({messageHistory}) => {
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleClicked = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<ChatboxCentered>
			<ChatboxContainer>
				<ChatboxHeader onMinimize={toggleClicked} isExpanded={isExpanded} />
				<ConversationHistory isExpanded={isExpanded} messageHistory={messageHistory}/>
				<InputBox isExpanded={isExpanded} />
			</ChatboxContainer>
		</ChatboxCentered>
	)
}

export default Chatbox
