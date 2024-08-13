import { FC } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

type Item = {
	title: string;
	list: string[];
	description: string;
	price: string;
};

type Category = {
	category: string;
	items: Item[];
};

const prices: Category[] = [
	{
		category: "Svatby",
		items: [
			{
				title: "Balíček Láska v kapse",
				list: [
					"6 hodin fotografování",
					"Až 150 upravených fotografií",
					"Předsvatební schůzka",
					"Fotografie zahrnují přípravy nevěsty a ženicha, samotný svatební obřad, fotografie skupin i novomanželů",
					"Doprava do 30 KM",
			
				],
				description: "Během tří hodinek stihneme obřad a párové foto, skupinky",
				price: "8000,-",
			},
			{
				title: "Balíček Zlatá vzpomínka",
				list: [
					"10 hodin fotografování",
					"Až 300 upravených fotografií",
					"Předsvatební schůzka",
					"doprava do 100 KM",
					
				],
				description:
					"Během 6 hodin stihneme vyfotografovat přípravy, obřad a párové foto, skupinky, oběd a první tanec",
				price: "12 000,-",
			},
			{
				title: "Balíček Celý příběh",
				list: [
					"14 hodin fotografování",
					"Až 400 upravených fotografií",
					"Předsvatební schůzka",
					"doprava do 100 KM",
				
				],
				description:
					"Během celho dne stihneme vyfotografovat přípravy, obřad a párové foto, skupinky, oběd a první tanec, házení květinou + druhé párové foto (západ slunce) a večerní párty",
				price: "15 000,-",
			},
		],
	},
	{
		category: "Portréty",
		items: [
			{
				title: "Rodinné focení",
				list: [
					"3 hodiny fotografování",
					"Doprava do 30 KM",
					"Až 150 upravených fotografií",
				],
				description: "Během tří hodinek stihneme obřad a párové foto, skupinky",
				price: "8000,-",
			},
			{
				title: "Párové focení",
				list: [
					"6 hodin fotografování",
					"doprava do 100 KM",
					"Až 350 upravených fotografií",
				],
				description:
					"Během 6 hodin stihneme vyfotografovat přípravy, obřad a párové foto, skupinky, oběd a první tanec",
				price: "15000,-",
			},
			{
				title: "Oslavy",
				list: [
					"celodenní fotografování (dokud to jde)",
					"doprava do 100 KM",
					"Až 600 upravených fotografií",
					"Předsvatební focení",
				],
				description:
					"Během celho dne stihneme vyfotografovat přípravy, obřad a párové foto, skupinky, oběd a první tanec, házení květinou + druhé párové foto (západ slunce) a večerní párty",
				price: "17000,-",
			},
		],
	},
];

export const Prices: FC = () => {
	return (
		<>
			<div className="flex flex-col gap-4">
				{prices.map((category) => (
					<div key={category.category} className="flex flex-col gap-4">
						<h2 className="text-2xl font-bold">{category.category}</h2>
						<div className="flex flex-row flex-wrap gap-4">
							{category.items.map((item) => (
								<Card
									key={item.title}
									className="flex flex-col gap-4 p-3 w-[350px]"
								>
									<CardHeader className="text-xl font-bold">
										<CardTitle>{item.title}</CardTitle>
									</CardHeader>
									<CardContent className="list-disc list-inside">
										{item.list.map((listItem) => (
											<li key={listItem}>{listItem}</li>
										))}
									</CardContent>
									<CardDescription className="text-sm">
										{item.description}
									</CardDescription>
									<CardFooter className="text-2xl font-bold">
										<span className="text-gray-500">Cena:</span>
										<span className="text-3xl font-bold">{item.price}</span>
									</CardFooter>
								</Card>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};
