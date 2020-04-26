import styled from 'styled-components'
import {primaryLight, secondaryLight} from "../../config/css-colors";

export const Alert = styled.div`
	border: 1px solid;
	border-radius: 5px;
	text-align: left;
	padding: 15px;
	margin: 10px;
`

export const AlertPrimary = styled(Alert)`
	${primaryLight}
`

export const AlertSecondary = styled(Alert)`
	${secondaryLight}
`
