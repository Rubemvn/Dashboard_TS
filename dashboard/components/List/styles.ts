import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-bottom: 30px;

	.tag-filter {
		font-size: 2rem;
		font-weight: 500;
		background: none;
		border: none;
		color: ${(props) => props.theme.colors.white};

		margin: 0 10px;

		transition: all 0.3s;

		&:hover {
			opacity: 0.7;
			scale: 1.05;
		}
	}

	.tag-filter-recurrent::after,
	.tag-filter-eventual::after {
		content: "";
		display: block;
		width: 55px;
		margin: 0 auto;
	}
	.tag-filter-eventual::after {
		border: 6px solid ${(props) => props.theme.colors.warning};
	}
	.tag-filter-recurrent::after {
		border: 6px solid ${(props) => props.theme.colors.sucess};
	}
`;
