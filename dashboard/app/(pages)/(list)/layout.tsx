"use client";
import List from "@/components/List";
import { usePathname } from "next/navigation";

const page = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const pathname = usePathname();
	const title =
		pathname === "/entry-balance"
			? "Entradas"
			: pathname === "/exits-balance"
			? "Saidas"
			: "";

	return <List title={title}>{children}</List>;
};

export default page;
