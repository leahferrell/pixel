import React from 'react'
import H2 from "../../components/text/H2";
import {CardSection} from "../../components/Section";
import Chatbox from "./Chatbox";

const messageHistory = [
	{
		user: "brit",
		self: true,
		text: "hello conversation! this is a really long conversation so i can test out my box. lets see if it works!",
		timestamp: "10:10:10"
	},
	{
		user: "notbrit",
		self: false,
		text: "hello conversation!",
		timestamp: "10:10:10"
	},
	{
		user: "leah",
		self: false,
		text: "hello!",
		timestamp: "10:10:10"
	}
];

const ChatboxDemo = () => {
	return (
		<React.Fragment>
			<H2>Chatbox</H2>
			<CardSection>
				<Chatbox messageHistory={messageHistory} />
			</CardSection>
		</React.Fragment>
	)
};

export default ChatboxDemo
