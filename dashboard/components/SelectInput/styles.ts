import styled from "styled-components";

export const Container = styled.div`
	> select {
		padding: 3px 10px;
		border-radius: 5px;
		margin-left: 7px;
		background-color: ${(props) => props.theme.colors.quartiary};
		border: solid 1px ${(props) => props.theme.colors.sucess};
		font-size: 1.5rem;
		color: white;
	}
`;
