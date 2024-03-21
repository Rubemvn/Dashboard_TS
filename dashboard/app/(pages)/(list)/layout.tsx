import List from "@/components/List";

export async function generateMetadata() {
	return {
		title: "Lista | Minha Carteira",
		description:
			"Controle financeiro simplificado e eficiente em uma interface intuitiva.",
	};
}

const page = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <List>{children}</List>;
};

export default page;
