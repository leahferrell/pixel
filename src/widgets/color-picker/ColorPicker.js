import React, {useState} from 'react'
import styled from 'styled-components'
import RenderingPanel from "./RenderingPanel";
import SelectorPanel from "./SelectorPanel";

const ColorPickerContainer = styled.div`
	display: flex;
	flex-direction: row;

	& > * {
		flex-grow: 1;
		max-width: 50%;
	}
`

const ColorPicker = ({colors}) => {
	const [selectedColor, setSelectedColor] = useState(null);

	return (
		<ColorPickerContainer>
			<SelectorPanel colors={colors} selected={selectedColor} onSelect={setSelectedColor}/>
			<RenderingPanel color={selectedColor} onDeselect={() => setSelectedColor(null)}/>
		</ColorPickerContainer>
	)
}

export default ColorPicker
