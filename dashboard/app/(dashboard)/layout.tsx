"use client";
import Aside from "@/components/Aside";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const page = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main>
			<Layout />
			{children}
		</main>
	);
};

export default page;
