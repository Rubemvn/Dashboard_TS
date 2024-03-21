import Dashboard from "@/components/Dashboard";

export async function generateMetadata() {
	return {
		title: "Dashboard | Minha Carteira",
		description:
			"Controle financeiro simplificado e eficiente em uma interface intuitiva.",
	};
}

const page = () => {
	return <Dashboard />;
};

export default page;
