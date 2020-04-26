import styled, {css} from 'styled-components'
import {
	dangerClickable, darkClickable, infoClickable, lightClickable,
	primaryClickable,
	secondaryClickable,
	successClickable,
	warningClickable
} from "../../config/css-colors";

export const Button = styled.button`
	color: whitesmoke;
	border-radius: 5px;
	padding: 10px;
	border: none;
	font-family: 'Raleway', sans-serif;
	font-weight: 400;
	font-size: 16px;
	transition: all 0.3s ease 0s;
	cursor: pointer;
`

const pill = css`
	padding: 9px 25px;
	border-radius: 50px;
`

export const ButtonPrimary = styled(Button)`
	${primaryClickable}
`

export const ButtonPrimaryPill = styled(ButtonPrimary)`
	${pill}
`

export const ButtonSecondary = styled(Button)`
	${secondaryClickable}
`

export const ButtonSecondaryPill = styled(ButtonSecondary)`
	${pill}
`

export const ButtonSuccess = styled(Button)`
	${successClickable}
`

export const ButtonSuccessPill = styled(ButtonSuccess)`
	${pill}
`

export const ButtonDanger = styled(Button)`
	${dangerClickable}
`

export const ButtonDangerPill = styled(ButtonDanger)`
	${pill}
`

export const ButtonWarning = styled(Button)`
	${warningClickable}
`

export const ButtonWarningPill = styled(ButtonWarning)`
	${pill}
`

export const ButtonInfo = styled(Button)`
	${infoClickable}
`

export const ButtonInfoPill = styled(ButtonInfo)`
	${pill}
`

export const ButtonLight = styled(Button)`
	${lightClickable}
`

export const ButtonLightPill = styled(ButtonLight)`
	${pill}
`

export const ButtonDark = styled(Button)`
	${darkClickable}
`

export const ButtonDarkPill = styled(ButtonDark)`
	${pill}
`
