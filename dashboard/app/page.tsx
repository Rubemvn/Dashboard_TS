import HomePageLayout from "@/components/HomePageLayout";
import GlobalStyles from "@/styles/GlobalStyles";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Minha Carteira",
	description:
		"Controle financeiro simplificado e eficiente em uma interface intuitiva.",
	icons: {
		icon: ["/images/DollarSign.svg?v=4"],
	},
};

const page = () => {
	return (
		<>
			<GlobalStyles />
			<HomePageLayout />
		</>
	);
};

export default page;
