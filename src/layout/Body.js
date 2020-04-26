import React from 'react'
import styled from 'styled-components'

const BodyContainer = styled.div`
	padding-top: 110px;
	min-height: calc(100vh - 185px);
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: stretch;
	background-color: whitesmoke;
`;

const Content = styled.div`
	flex-grow: 2;
	max-width: 1000px;
`;

const Body = ({children}) => {
	return (
		<BodyContainer>
			<Content>
				{children}
			</Content>
		</BodyContainer>
	)
}

export default Body
