import GlobalStyles from "@/styles/GlobalStyles";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { Metadata } from "next";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Minha Carteira",
	description:
		"Controle financeiro simplificado e eficiente em uma interface intuitiva.",
	icons: {
		icon: ["/images/DollarSign.svg?v=4"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-br'>
			<GlobalStyles />
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
