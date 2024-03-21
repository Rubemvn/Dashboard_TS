import { Container, LinkHome } from "./styles";

const HomeContent = () => {
	return (
		<Container>
			<h1>HomeContent</h1>
			<LinkHome href='/dashboard'>Dashboard</LinkHome>
		</Container>
	);
};

export default HomeContent;
