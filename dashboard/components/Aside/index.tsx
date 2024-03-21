// Imagens
import logo from "@/public/images/DollarSign.svg";
import logoDark from "@/public/images/DollarSign-dark.svg";

// Icons
import { MdOutlineSpaceDashboard, MdExitToApp } from "react-icons/md";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";

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
				<MenuItemLink href='/dashboard'>
					<MdOutlineSpaceDashboard />
					Dashboard
				</MenuItemLink>
				<MenuItemLink href='/add-item'>
					<RiPlayListAddLine />
					Adicionar Registro
				</MenuItemLink>
				<MenuItemLink href='/entry-balance'>
					<FaArrowCircleUp />
					Entradas
				</MenuItemLink>
				<MenuItemLink href='exits-balance'>
					<FaArrowCircleDown />
					Saídas
				</MenuItemLink>
				<MenuItemLink href='/'>
					<MdExitToApp />
					Sair
				</MenuItemLink>
			</MenuContainer>
		</Container>
	);
};

export default Aside;
