"use client";

import React, { useMemo, useState } from "react";
import ContentHeader from "../ContentHeader";
import SelectInput from "../SelectInput";
import { Container, Content, Filters } from "./styles";

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

	const [title, setTitle] = useState("");

	const setTitleForChild = (newTitle: any) => {
		setTitle(newTitle);
	};

	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { setTitle: setTitleForChild });
		}
		return child;
	});

	return (
		<Container>
			<ContentHeader
				title={title}
				linecolor='#03BB85'>
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

			<Content>{childrenWithProps}</Content>
		</Container>
	);
};

export default List;
