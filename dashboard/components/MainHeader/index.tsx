"use client";
import { useMemo } from "react";

import { Container, Profile, Welcome, UserName } from "./styles";
import emojis from "@/utils/emojis";
import Toggle from "../Toggle";

const MainHeader = () => {
	const emoji = useMemo(() => {
		const indice = Math.floor(Math.random() * emojis.length);
		return emojis[indice];
	}, []);

	return (
		<Container suppressHydrationWarning={true}>
			<Toggle />
			<Profile>
				<Welcome>Olá, {emoji}</Welcome>
				<UserName>Rúbem Vieira</UserName>
			</Profile>
		</Container>
	);
};

export default MainHeader;
