import List from "@/components/List";

export async function generateMetadata() {
	return {
		title: "Lista | Minha Carteira",
		description:
			"Controle financeiro simplificado e eficiente em uma interface intuitiva.",
	};
}

const page = () => {
	return <List />;
};

export default page;
