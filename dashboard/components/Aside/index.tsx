import React from "react";

import { Container, Header, LogImg, Title } from "./styles";

const Aside: React.FC = () => {
	return (
		<Container>
			<Header>
				<LogImg
					src='@/components/Aside/Dollar-sign.svg'
					alt={"Logo Minha Carteira"}
				/>
				<Title>Minha Carteira</Title>
			</Header>
		</Container>
	);
};

export default Aside;
