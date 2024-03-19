// Imagens
import logo from "@/public/images/DollarSign.svg";
import logoDark from "@/public/images/DollarSign-dark.svg";

import { MdOutlineSpaceDashboard, MdExitToApp } from "react-icons/md";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

// styled Components
import {
	Container,
	Header,
	LogImg,
	Title,
	MenuContainer,
	MenuItemLink,
} from "./styles";

// Componente
const Aside: React.FC = () => {
	return (
		<Container>
			<Header>
				<LogImg
					src={logo}
					alt='Brasão de cifrão dentro de círculo'
				/>
				<Title>Minha Carteira</Title>
			</Header>

			<MenuContainer>
				<MenuItemLink href='#'>
					<MdOutlineSpaceDashboard />
					Dashboard
				</MenuItemLink>
				<MenuItemLink href='#'>
					<FaArrowCircleUp />
					Entradas
				</MenuItemLink>
				<MenuItemLink href='#'>
					<FaArrowCircleDown />
					Saídas
				</MenuItemLink>
				<MenuItemLink href='#'>
					<MdExitToApp />
					Sair
				</MenuItemLink>
			</MenuContainer>
		</Container>
	);
};

export default Aside;
