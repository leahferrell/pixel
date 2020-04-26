import styled from "styled-components";
import React from "react";
import ConversationMessage from "./ChatboxMessage";

const ConversationHistoryContainer = styled.div`
	display: ${props => props.isExpanded ? 'flex' : 'none'};
	padding: 10px;
	flex-direction: column-reverse;
	min-height: 400px;
`

const ConversationHistory = ({isExpanded, messageHistory}) => {
	const conversation = messageHistory.map((m,i) =>
			<ConversationMessage
				user={m.user}
				self={m.self}
				text={m.text}
				timestamp={m.timestamp}
				key={i}
			/>
		)

	return (
		<ConversationHistoryContainer isExpanded={isExpanded} >
			{conversation}
		</ConversationHistoryContainer>
	)
}

export default ConversationHistory
