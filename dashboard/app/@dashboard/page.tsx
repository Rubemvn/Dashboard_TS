import Link from "next/link";
import React from "react";

const page = () => {
	const nome = "Rúbem";
	console.log(nome);
	return (
		<main>
			<div>
				<h1>Dashboard</h1>
				<p>meu nome é Rúbem</p>
				<Link
					href={"https://rubemvn.github.io"}
					target='_blank'>
					asds
				</Link>
				<input type='text' />
			</div>
		</main>
	);
};

export default page;
