import React from 'react'
import H2 from "../../components/text/H2";
import {CardSection} from "../../components/Section";
import ColorPicker from "./ColorPicker";

const colors = [
	"darkred", "red", "orangered",
	"darkorange", "orange", "goldenrod",
	"darkgoldenrod", "yellow", "yellowgreen",
	"darkgreen", "green", "turquoise",
	"darkblue", "blue", "lightblue",
	"blueviolet", "purple", "orchid"
];

const ColorPickerDemo = () => {
	return (
		<React.Fragment>
			<H2>ColorPicker</H2>
			<CardSection>
				<ColorPicker colors={colors}/>
			</CardSection>
		</React.Fragment>
	)
};

export default ColorPickerDemo
