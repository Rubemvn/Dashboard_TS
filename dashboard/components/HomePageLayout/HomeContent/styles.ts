import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 70px);
	background-color: blue;

	> h1 {
		width: 100%;
		color: white;
		font-size: 5rem;
		padding: 10px;
		text-align: center;
	}
`;

export const LinkHome = styled(Link)`
	width: 100%;
	color: white;
	font-size: 5rem;
	padding: 10px;
	text-align: center;
	font-style: italic;
	font-weight: 600;
`;
