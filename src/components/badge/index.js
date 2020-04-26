import styled from 'styled-components'
import {danger, dark, info, light, primary, secondary, success, warning} from "../../config/css-colors";

export const Badge = styled.span`
	color: whitesmoke;
	border-radius: 5px;
	padding: .5em;
	font-size: .5em;
`

export const BadgePrimary = styled(Badge)`
	${primary}
`

export const BadgeSecondary = styled(Badge)`
	${secondary}
`

export const BadgeSuccess = styled(Badge)`
	${success}
`

export const BadgeDanger = styled(Badge)`
	${danger}
`

export const BadgeWarning = styled(Badge)`
	${warning}
`

export const BadgeInfo = styled(Badge)`
	${info}
`

export const BadgeLight = styled(Badge)`
	${light}
`

export const BadgeDark = styled(Badge)`
	${dark}
`
