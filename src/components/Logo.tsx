import Image from "next/image";
import { FC } from "react";

type Props = {};

export const Logo: FC<Props> = () => {
	return (
		<div className="flex flex-row items-center gap-2">
			<h1 className="text-3xl font-bold">HAJANSKÝ</h1>
			<Image src="/logo.png" alt="Logo" width={70} height={70} />
			<h1 className="text-3xl font-bold">FOTOGRAF</h1>
		</div>
	);
};
