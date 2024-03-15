"use client";

import styled from "styled-components";

export const Container = styled.div`
	grid-area: MH;
	background-color: ${(props) => props.theme.colors.secondary};

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 30px;
`;

export const Profile = styled.div`
	color: ${(props) => props.theme.colors.white};
	font-size: 18px;
	font-family: inter;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
