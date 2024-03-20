"use client";

import React from "react";
import ContentHeader from "../ContentHeader";
import { Container } from "./styles";

import SelectInput from "../SelectInput";

const options = [
	{ value: "Rúbem", label: "Rúbem" },
	{ value: "Hariely", label: "Hariely" },
	{ value: "Esdras", label: "Esdras" },
];

const Dashboard: React.FC = () => {
	return (
		<Container>
			<ContentHeader
				title={"Dashboard"}
				lineColor='info'>
				<SelectInput options={options} />
			</ContentHeader>
		</Container>
	);
};

export default Dashboard;
