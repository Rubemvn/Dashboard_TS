"use client";

import React from "react";
import ContentHeader from "../ContentHeader";
import SelectInput from "../SelectInput";
import { Container, Content } from "./styles";
import HistoryFinanceCard from "../HistoryFinanceCard";

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
			<Content>
				<HistoryFinanceCard
					tagColor='#03BB85'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#E44C4E'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#03BB85'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#E44C4E'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#03BB85'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#E44C4E'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#03BB85'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#E44C4E'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#03BB85'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#E44C4E'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#03BB85'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#E44C4E'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#03BB85'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
				<HistoryFinanceCard
					tagColor='#03BB85'
					title='Monitor 31" LCD 75Hz Samsung'
					subtitle='30/05/2002'
					amount='R$ 1.399,00'
				/>
			</Content>
		</Container>
	);
};

export default List;
