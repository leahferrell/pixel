import styled from 'styled-components'

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid gainsboro;
	padding: 10px;
`

export const InlineSection = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`

export const CardSection = styled(Section)`
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.09);
`
