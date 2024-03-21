"use client";

import React from "react";
import ContentHeader from "../ContentHeader";
import SelectInput from "../SelectInput";
import { Container, Content, Filters } from "./styles";
import HistoryFinanceCard from "../HistoryFinanceCard";

const List = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const months = [
		{ value: 1, label: "Janeiro" },
		{ value: 2, label: "Fevereiro" },
		{ value: 3, label: "Março" },
	];

	const years = [
		{ value: 2024, label: 2024 },
		{ value: 2023, label: 2023 },
		{ value: 2022, label: 2022 },
	];

	return (
		<Container>
			<ContentHeader
				title={"Entradas"}
				lineColor='#03BB85'>
				<SelectInput options={months} />
				<SelectInput options={years} />
			</ContentHeader>

			<Filters>
				<button
					type='button'
					className='tag-filter tag-filter-recurrent'>
					Recorrentes
				</button>
				<button
					type='button'
					className='tag-filter tag-filter-eventual'>
					Eventuais
				</button>
			</Filters>

			<Content>
				{children}
				{/*  */}
			</Content>
		</Container>
	);
};

export default List;
