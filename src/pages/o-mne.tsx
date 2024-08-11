import Image from "next/image";
import { FC } from "react";

type Props = {};

const Me: FC<Props> = () => {
	return (
		<div className="flex flex-row justify-between gap-4">
			<Image
				src={"/me.jpg"}
				alt="Me"
				width={300}
				height={300}
				className="rounded-full"
			/>
			<p>
			Fotografii se věnuji již řadu let, přičemž mojí specializací je fotografie přírody. Kromě toho se zaměřuji také na portrétní, eventovou a svatební fotografii.
			</p>
		</div>
	);
};

export default Me;
