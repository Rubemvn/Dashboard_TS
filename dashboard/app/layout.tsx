import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

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
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
