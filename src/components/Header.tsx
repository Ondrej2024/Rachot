import { FC } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Separator } from "./ui/separator";
import Link from "next/link";

export const Header: FC = () => {
	return (
		<>
			<div className="flex flex-row items-center justify-evenly gap-4 p-4">
				<Navigation
					links={[
						{ name: "Portfólio", href: "/photo" },
						{ name: "O mně", href: "/me" },
					]}
				/>
				<Link href="/">
					<Logo />
				</Link>
				<Navigation
					links={[
						{ name: "Ceník", href: "/price" },
						{ name: "Kontakt", href: "/contact" },
					]}
				/>
			</div>
			<Separator />
		</>
	);
};
