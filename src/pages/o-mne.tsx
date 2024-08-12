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
				Já jsem Ondra, lidé mi říkají MAGORE! Rád fotím ptáky a nerad fotím
				kytky.
			</p>
		</div>
	);
};

export default Me;
