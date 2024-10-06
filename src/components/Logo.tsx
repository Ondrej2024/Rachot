import Image from "next/image";
import { FC } from "react";

type Props = {};

export const Logo: FC<Props> = () => {
	return (
		<div className="flex flex-row items-center gap-2">
			<h1 className="text-3xl text-right">
				<span className="font-bold">HAJANSKÝ</span>
				<br />
				Ondřej
			</h1>
			<Image src="/logo.png" alt="Logo" width={80} height={80} />
			<h1 className="text-3xl">
				<span className="font-bold">FOTOGRAF</span>
				<br />
				Klein
			</h1>
		</div>
	);
};
