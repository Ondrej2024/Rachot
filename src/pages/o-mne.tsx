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
				
			/>
			<p>
				Mé jméno je Ondřej, fotografii se věnuji již řadu let, vždy jsem byl však zaměřený spíše na přírodu a ne kontakt s lidmi. Po mém prvním focení svatby jsem však zjistil, že mě to náramně baví. Proto jsem se rozhodl, že budu toto nadšení sdílet...
			</p>
		</div>
	);
};

export default Me;
