"use client";
import ContentHeader from "../ContentHeader";
import SelectInput from "../SelectInput";
import { Container, Content, Filters } from "./styles";

const List = ({
	children,
	title,
}: Readonly<{
	children: React.ReactNode;
	title: string;
}>) => {
	const months = [
		{ value: 1, label: "Janeiro", key: 1 },
		{ value: 2, label: "Fevereiro", key: 2 },
		{ value: 3, label: "Março", key: 3 },
	];

	const years = [
		{ value: 2024, label: 2024, key: 1 },
		{ value: 2023, label: 2023, key: 2 },
		{ value: 2022, label: 2022, key: 3 },
	];

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

			<Content>{children}</Content>
		</Container>
	);
};

export default List;
