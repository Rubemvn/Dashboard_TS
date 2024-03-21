import styled from "styled-components";

interface ITagProps {
	color: string;
}

export const Container = styled.li`
	list-style: none;
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
	padding: 12px 12px;
	border-radius: 5px;
	margin: 10px 0;
	background-color: ${(props) => props.theme.colors.tertiary};
	color: ${(props) => props.theme.colors.white};
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		opacity: 0.8;
		transform: translateX(10px);
	}

	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		> small {
			color: ${(props) => props.theme.colors.gray};
		}

		> span {
			font-size: 2rem;
		}

		> small {
			font-size: 1.6rem;
		}
	}

	> h3 {
		font-size: 2.6rem;
	}
`;

export const Tag = styled.div<ITagProps>`
	background-color: ${(props) => props.color};
	position: absolute;
	width: 6px;
	height: 40px;
	left: 0;
`;
