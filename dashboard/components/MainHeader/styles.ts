import styled from "styled-components";

export const Container = styled.div`
	grid-area: MH;
	background-color: ${(props) => props.theme.colors.secondary};
	/* color: ${(props) => props.theme.colors.black}; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
`;

export const Profile = styled.div`
	color: ${(props) => props.theme.colors.white};
	font-family: inter;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
