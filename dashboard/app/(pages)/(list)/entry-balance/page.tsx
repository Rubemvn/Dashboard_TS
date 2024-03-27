"use client";
import HistoryFinanceCard from "@/components/HistoryFinanceCard";
import { useEffect } from "react";

interface IPageProps {
	setTitle: (newTitle: string) => void;
}

const page = ({ setTitle }: IPageProps) => {
	useEffect(() => {
		setTitle("Entrada");
	}, []);

	return (
		<>
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
			;
		</>
	);
};

export default page;
