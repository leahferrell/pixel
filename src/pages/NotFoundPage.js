import React from 'react'
import styled from 'styled-components'
import H1 from '../components/text/H1'

const NotFoundPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const NotFound = styled.div`
	background-color: whitesmoke;
	padding: 20px;
`

const NotFoundPage = ({children}) => {
	return (
		<NotFoundPageContainer>
			<NotFound>
				<H1>404: Not Found</H1>
				Sad Day...
			</NotFound>
		</NotFoundPageContainer>
	)
}

export default NotFoundPage
