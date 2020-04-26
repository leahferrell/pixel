import styled from "styled-components";
import Color from "./Color";
import H2 from "../../components/text/H2";
import React from "react";

const SelectorPanelContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
`

const ColorsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
`

const SelectorPanel = ({colors, onSelect, selected}) => {
	const colorItems = colors.map(c =>
		<Color
			color={c}
			onSelect={onSelect}
			selected={selected === c}
			key={c}
		/>
	)

	return (
		<SelectorPanelContainer>
			<H2>Select a color:</H2>
			<ColorsContainer>
				{colorItems}
			</ColorsContainer>
		</SelectorPanelContainer>
	)
}

export default SelectorPanel
