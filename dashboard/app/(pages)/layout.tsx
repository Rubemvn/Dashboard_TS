"use client";
import Layout from "@/components/Layout";
import GlobalStyles from "@/styles/GlobalStyles";
import dark from "@/styles/themes/dark";
import light from "@/styles/themes/light";
import { ThemeProvider } from "styled-components";

const page = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<ThemeProvider theme={dark}>
			<GlobalStyles />

			<main>
				<Layout>{children}</Layout>
			</main>
		</ThemeProvider>
	);
};

export default page;
