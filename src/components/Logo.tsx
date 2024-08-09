import Image from "next/image";
import { FC } from "react";

type Props = {};

export const Logo: FC<Props> = () => {
	return (
		<div className="flex flex-row items-center gap-5 ">
			<Image src="/logo.png" alt="Logo" width={150} height={150} />
			<h1 className="text-2xl font-bold">HAJANSKÝ FOTOGRAF</h1>
		</div>
	);
};
