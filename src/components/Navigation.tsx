import Link from "next/link";
import { FC } from "react";

type Props = {
	links: {
		name: string;
		href: string;
	}[];
};

export const Navigation: FC<Props> = ({ links }) => {
	return (
		<div className="flex flex-row items-center gap-4 ">
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className="text-2xl text-gray-400 hover:text-gray-900"
				>
					{link.name}
				</Link>
			))}
		</div>
	);
};
