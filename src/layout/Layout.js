import React from "react";
import GlobalStyle from "../config/global-styles";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import styled from "styled-components";

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const Layout = ({children}) => {
	return (
		<LayoutContainer>
			<GlobalStyle />
			<Header />
			<Body>
				{children}
			</Body>
			<Footer />
		</LayoutContainer>
	)
};

export default Layout;
