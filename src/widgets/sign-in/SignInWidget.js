import React, {useState} from 'react'
import styled from 'styled-components'
import ImageLogo from "../../components/image/ImageLogo";
import H2 from "../../components/text/H2";
import {ButtonPrimary} from "../../components/button";
import {InputBottom, InputGroup, InputTop} from "../../components/input";

const SignInContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: stretch;
`

const SignInForm = styled.form`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	text-align: center;
	max-width: 400px;
	flex-grow: 2;
	& > * {
		margin: 10px;
	}
`

const CenteredItem = styled.div`
	text-align: center;
`

const SignInTitle = styled(H2)`
	text-align: center;
`

const SignInWidget = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		console.log(email);
		console.log(password);

		e.preventDefault();
	};

	return (
		<SignInContainer>
			<SignInForm onSubmit={handleSubmit}>
				<CenteredItem>
					<ImageLogo size={60} src="logo192.png" alt="logo" />
				</CenteredItem>
				<SignInTitle>Please sign in</SignInTitle>
				<InputGroup>
					<InputTop placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}/>
					<InputBottom type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
				</InputGroup>
				<div><input type="checkbox"/>Remember me</div>
				<ButtonPrimary type="submit">Sign in</ButtonPrimary>
				<div>Copyright</div>
			</SignInForm>
		</SignInContainer>
	)
}

export default SignInWidget
