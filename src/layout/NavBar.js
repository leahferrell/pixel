import React from 'react'
import styled from 'styled-components'

const NavLink = styled.div`
	padding: 0 20px;
	margin: 10px;
	width: 100%;
	text-align: center;
	order: 4;
	display: ${props => props.isExpanded ? 'block' : 'none'};

	a {
		transition: all 0.3s ease 0s;
	}

	a:hover {
		color: #007bff;
	}

	@media(min-width: 900px) {
		width: auto;
		display: block;
	}
`

const NavBar = ({isExpanded}) => {
	return (
		<React.Fragment>
			<NavLink isExpanded={isExpanded}><a href="/components">Components</a></NavLink>
			<NavLink isExpanded={isExpanded}><a href="/widgets">Widgets</a></NavLink>
			<NavLink isExpanded={isExpanded}><a href="/articles">Articles</a></NavLink>
			<NavLink isExpanded={isExpanded}><a href="/about">About</a></NavLink>
		</React.Fragment>
	)
}

export default NavBar
