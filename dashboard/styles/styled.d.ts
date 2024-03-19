import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		title: string;
		colors: {
			primary: string;
			secondary: string;
			tertiary: string;
			quartiary: string;

			white: string;
			black: string;
			gray: string;
			graySecondary: string;

			sucess: string;
			info: string;
			warning: string;
		};
	}
}
