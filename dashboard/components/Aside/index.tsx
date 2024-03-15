import imagem from "@/public/assets/Captura de tela 2023-11-30 174137.png";

import {
	Container,
	Header,
	LogImg,
	Title,
	MenuContainer,
	MenuItemLink,
} from "./styles";
import { useMemo } from "react";

const Aside: React.FC = () => {
	const logImgUrl = useMemo(
		() => `data:image/svg+xml;base64,${btoa(imagem)}`,
		[imagem],
	);
	return (
		<Container>
			<Header>
				<LogImg src={imagem} />
				<Title>Minha Carteira</Title>
			</Header>
			<MenuContainer>
				<MenuItemLink href='#'>Dashboard</MenuItemLink>
			</MenuContainer>
		</Container>
	);
};

export default Aside;
