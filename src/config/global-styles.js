import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: 'Raleway', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	html {
		background-color: #24252A;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	li, a {
	  font-family: 'Raleway', sans-serif;
	  font-weight: 400;
	  font-size: 16px;
	  color: #edf0f1;
	  text-decoration: none;
	}
`;

export default GlobalStyle;
