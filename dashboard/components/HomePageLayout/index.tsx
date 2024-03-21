"use client";
import HomeContent from "./HomeContent";
import HomeHeader from "./HomeHeader";
import { Container } from "./styles";

const HomePageLayout = () => {
	return (
		<Container>
			<HomeHeader />
			<HomeContent />
		</Container>
	);
};

export default HomePageLayout;
