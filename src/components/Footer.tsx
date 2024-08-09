import { FC } from "react";
import { Separator } from "./ui/separator";

type Props = {};

export const Footer: FC<Props> = () => {
	return (
		<>
			<Separator />
			<div className="flex flex-col items-center justify-center gap-4 p-4">
				<p className="text-sm text-gray-400">
					© {new Date().getFullYear()} Ondřej Klein | +420 604 701 507 |
					ondra.klein20@seznam.cz
				</p>
			</div>
		</>
	);
};
