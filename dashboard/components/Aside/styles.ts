import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
	grid-area: AS;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.white};
	display: flex;
	flex-direction: column;
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 70px;
`;

export const LogImg = styled(Image)`
	width: 40px;
	height: 40px;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
`;

export const MenuContainer = styled.nav`
	margin-top: 30px;
	margin-left: 30px;
	display: flex;
	flex-direction: column;
`;

export const MenuItemLink = styled(Link)`
	display: flex;
	gap: 10px;
	align-items: center;
	color: ${(props) => props.theme.colors.gray};
	text-decoration: none;
	font-size: 2.1rem;
	font-weight: 500;
	margin: 7px 0;

	transition: all 0.3s ease-in-out;

	cursor: pointer;

	&:hover {
		opacity: 0.7;
		transform: translateX(5px);
	}
`;
