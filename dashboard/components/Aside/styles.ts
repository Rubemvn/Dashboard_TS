import styled from "styled-components";

export const Container = styled.div`
	grid-area: AS;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.black};
`;

export const Header = styled.header``;
export const LogImg = styled.img`
	width: 50px; /* Ajuste o tamanho conforme necessário */
	height: auto; /* Isso garantirá que a proporção do SVG seja mantida */
`;
export const Title = styled.h1``;
export const MenuContainer = styled.nav``;
export const MenuItemLink = styled.a``;
