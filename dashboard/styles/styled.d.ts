import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		title: string;
		colors: {
			primary: string;
			secondary: string;
			tertuary: string;

			white: string;
			black: string;
			grays: string;

			sucess: string;
			info: string;
			warning: string;
		};
	}
}
