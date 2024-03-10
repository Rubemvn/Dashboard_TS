"use client";
import Aside from "@/components/Aside";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<main>
			<div>
				<h1>Dashboard</h1>
				<p>meu nome é Rúbem</p>
				<Aside />
				<Link
					href={"https://rubemvn.github.io"}
					target='_blank'>
					portifólio
				</Link>
			</div>
		</main>
	);
};

export default page;
