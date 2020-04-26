import React from 'react'
import styled from 'styled-components'
import H1 from '../components/text/H1'
import H2 from "../components/text/H2";

const ArticlePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const Article = styled.div`
	padding: 20px;
`

const ArticlePage = ({children}) => {
	return (
		<ArticlePageContainer>
			<Article>
				<H1>Hello, world!</H1>
				<H2>About</H2>
				<p>This is a template project</p>
				<H2>Headers</H2>
				Testing
			</Article>
		</ArticlePageContainer>
	)
}

export default ArticlePage
