import {css} from 'styled-components'

export const primary = css`
	background-color: #007bff;
`

export const primaryClickable = css`
	background-color: #007bff;

	&:hover, &:visited, &:active, &:focus  {
		background-color: #0069d9;
	}
`

export const primaryLight = css`
	background-color: #cde5ff;
	border-color: #b8daff;
	color: #004086;
`

export const secondary = css`
	background-color: grey;
`

export const secondaryClickable = css`
	background-color: grey;

	&:hover, &:visited, &:active, &:focus  {
		background-color: #5a6268;
	}
`

export const secondaryLight = css`
	background-color: #e2e3e5;
	color: #383d42;
	border-color: #d7d8db;
`

export const success = css`
	background-color: #28a745;
`

export const successClickable = css`
	background-color: #28a745;

	&:hover, &:visited, &:active, &:focus  {
		background-color: #218838;
	}
`

export const danger = css`
	background-color: #dc3546;
`

export const dangerClickable = css`
	background-color: #dc3546;

	&:hover, &:visited, &:active, &:focus  {
		background-color: #c82333;
	}
`

export const warning = css`
	background-color: #ffc108;
`

export const warningClickable = css`
	background-color: #ffc108;

	&:hover, &:visited, &:active, &:focus  {
		background-color: #e0a800;
	}
`

export const info = css`
	background-color: #17a2b8;
`

export const infoClickable = css`
	background-color: #17a2b8;

	&:hover, &:visited, &:active, &:focus  {
		background-color: #138496;
	}
`

export const light = css`
	background-color: #f8f9fa;
	color: #343a41;
`

export const lightClickable = css`
	background-color: #f8f9fa;
	color: #343a41;

	&:hover, &:visited, &:active, &:focus  {
		background-color: #e2e6ea;
	}
`

export const dark = css`
	background-color: #343a41;
`

export const darkClickable = css`
	background-color: #343a41;

	&:hover, &:visited, &:active, &:focus {
		background-color: #23272b;
	}
`
