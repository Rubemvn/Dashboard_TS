import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalStyles from "@/styles/GlobalStyles";

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
		<>
			<GlobalStyles />
			<html lang='pt-br'>
				<head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
						rel='stylesheet'
					/>
				</head>
				<body>{children}</body>
			</html>
		</>
	);
}
