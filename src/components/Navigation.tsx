import Link from "next/link";
import { FC } from "react";

const links = [
	{ name: "Úvod", href: "/" },
	{ name: "Portfólio", href: "/photo" },
	{ name: "O mě", href: "/me" },
	{ name: "Ceník", href: "/price" },
	{ name: "Kontakt", href: "/contact" },
];

export const Navigation: FC = () => {
	return (
		<div className="flex flex-row items-center gap-4">
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className="text-sm text-gray-500 hover:text-gray-700"
				>
					{link.name}
				</Link>
			))}
		</div>
	);
};
