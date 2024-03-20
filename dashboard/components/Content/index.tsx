import React from "react";

import { Container } from "./styles";
import ContentHeader from "../ContentHeader";

const Content = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <Container>{children}</Container>;
};

export default Content;
