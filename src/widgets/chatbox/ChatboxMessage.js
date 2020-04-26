import styled from "styled-components";
import React from "react";

const padText = (text, numChars) => {
	const paddingCount = numChars - text.length

	if (paddingCount > 0) {
		return text.concat(Array(paddingCount).fill('~').join(''));
	} else if (paddingCount < 0) {
		return text;
	}
	else {
		return text;
	}
}

const ConversationObjectContainer = styled.div`
	display: flex;
	background-color: transparent;
`

const User = styled.div`
	font-weight: bold;
	margin-right: 5px;
`

const Text = styled.div`

`

const Timestamp = styled.div`
	font-weight: bold;
	margin-right: 5px;
`

const ConversationMessage = ({user, text, timestamp}) => {
	return (
		<ConversationObjectContainer>
			<Timestamp>{timestamp}</Timestamp>
			<User>[{padText(user, 7)}]:</User>
			<Text>{text}</Text>
		</ConversationObjectContainer>
	)
}

export default ConversationMessage
