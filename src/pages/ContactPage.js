import React from 'react'
import styled from 'styled-components'
import H1 from '../components/text/H1'

const ContactPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const Contact = styled.div`
	background-color: whitesmoke;
	padding: 20px;
`

const ContactPage = ({children}) => {
	return (
		<ContactPageContainer>
			<Contact>
				<H1>Contact:</H1>
				So you want to reach out... I think that's cool! Use this form to send me a message
			</Contact>
		</ContactPageContainer>
	)
}

export default ContactPage
