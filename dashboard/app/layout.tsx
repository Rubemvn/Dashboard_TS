import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
	return {
		title: "Minha Carteira",
		description:
			"Controle financeiro simplificado e eficiente em uma interface intuitiva.",
	};
}

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
