import styled from "styled-components";

interface ITitleContainerProps {
	linecolor: string;
}

export const Container = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;

	margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
	> h1 {
		color: ${(props) => props.theme.colors.white};
		font-size: 3rem;

		&::after {
			content: "";
			display: block;
			width: 55px;
			border-bottom: 6px solid ${(props) => props.linecolor};
		}
	}
`;

export const Controllers = styled.div`
	display: flex;
	align-items: center;

	padding-right: 40px;
`;
