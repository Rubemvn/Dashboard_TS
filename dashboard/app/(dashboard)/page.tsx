import React from "react";
import Head from "next/head";

export async function generateMetadata() {
	return {
		title: "Dashboard | Minha Carteira",
		description:
			"Controle financeiro simplificado e eficiente em uma interface intuitiva.",
	};
}

const page = () => {
	return (
		<>
			<h1>Dashboard</h1>;
		</>
	);
};

export default page;
