import { FC } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Separator } from "./ui/separator";

type Props = {};

export const Header: FC<Props> = () => {
	return (
		<>
			<div className="flex flex-row items-center justify-between gap-4 p-4 bg-zinc-200">
				<Logo />
				<Navigation />
			</div>
			<Separator />
		</>
	);
};
