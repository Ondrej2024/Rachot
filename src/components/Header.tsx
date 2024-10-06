import { FC } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Separator } from "./ui/separator";
import Link from "next/link";

export const Header: FC = () => {
	return (
		<>
			<div className="flex flex-row items-center justify-evenly gap-4 p-4">
				<Link href="/">
					<Logo />
				</Link>
				<Navigation
					links={[
						{ name: "O mně", href: "/o-mne" },
						{ name: "Portfólio", href: "/portfolio" },
						{ name: "Nabídka", href: "/nabidka" },
						{ name: "Kontakt", href: "/kontakt" },
					]}
				/>
			</div>
			<Separator />
		</>
	);
};
