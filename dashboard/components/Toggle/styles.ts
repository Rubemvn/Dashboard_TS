import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ToggleLabel = styled.span`
	color: ${(props) => props.theme.colors.white};
	font-size: 20px;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
	({ theme }) => ({
		onColor: theme.colors.gray,
		offColor: theme.colors.graySecondary,
		handleDiameter: 26,
		height: 22,
		width: 54,
	}),
)<ReactSwitchProps>`
	margin: 0 7px;
`;
