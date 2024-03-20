"use client";

import React from "react";
import ContentHeader from "../ContentHeader";
import SelectInput from "../SelectInput";
import { Container } from "./styles";

const List: React.FC = () => {
	const options = [
		{ value: "Rúbem", label: "Rúbem" },
		{ value: "Hariely", label: "Hariely" },
		{ value: "Esdras", label: "Esdras" },
	];

	return (
		<Container>
			<ContentHeader
				title={"Entradas"}
				lineColor='#03BB85'>
				<SelectInput options={options} />
			</ContentHeader>
		</Container>
	);
};

export default List;
