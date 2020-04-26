import styled from "styled-components";

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
`

export const Input = styled.input`
	border: 1px solid #ced4db;
	border-radius: 5px;
	padding: 10px;
`

export const InputTop = styled(Input)`
	border-radius: 5px 5px 0 0;
`

export const InputBottom = styled(Input)`
	border-top: none;
	border-radius: 0 0 5px 5px;
`
