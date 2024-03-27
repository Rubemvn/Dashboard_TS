"use client";

import React from "react";
import ContentHeader from "../ContentHeader";
import { Container } from "./styles";

import SelectInput from "../SelectInput";

const Dashboard: React.FC = () => {
	const options = [
		{ value: "Rúbem", label: "Rúbem" },
		{ value: "Hariely", label: "Hariely" },
		{ value: "Esdras", label: "Esdras" },
	];

	return (
		<Container>
			<ContentHeader
				title={"Dashboard"}
				linecolor='#3B5998'>
				<SelectInput options={options} />
			</ContentHeader>
		</Container>
	);
};

export default Dashboard;
