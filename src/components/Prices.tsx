import { FC } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Title } from "./Title";

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

const prices: Record<"wedding" | "next", Category> = {
	wedding: {
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
	next: {
		category: "Další focení",
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
					"Během celeho dne stihneme vyfotografovat přípravy, obřad a párové foto, skupinky, oběd a první tanec, házení květinou + druhé párové foto (západ slunce) a večerní párty",
				price: "17000,-",
			},
		],
	},
};

type Review = {
	img: string;
	text: string;
};

const reviews: Review[] = [
	{
		img: "/portfolio/10.png",
		text: "1 Ondřej is a pleasant photographer who has no problem with anything, he's a great guy. Vendula and Ondřej 2024",
	},
	{
		img: "/portfolio/10.png",
		text: "2 Ondřej is a pleasant photographer who has no problem with anything, he's a great guy. Vendula and Ondřej 2024",
	},
	{
		img: "/portfolio/10.png",
		text: "3 Ondřej is a pleasant photographer who has no problem with anything, he's a great guy. Vendula and Ondřej 2024",
	},
	{
		img: "/portfolio/10.png",
		text: "4 Ondřej is a pleasant photographer who has no problem with anything, he's a great guy. Vendula and Ondřej 2024",
	},
	{
		img: "/portfolio/10.png",
		text: "5 Ondřej is a pleasant photographer who has no problem with anything, he's a great guy. Vendula and Ondřej 2024",
	},
];

export const Prices: FC = () => {
	return (
		<main className="space-y-12">
			<section className="flex justify-between space-x-4">
				<Image
					src="/portfolio/10.png"
					alt="Wedding Photo 1"
					width="300"
					height="400"
					style={{ aspectRatio: "300/400", objectFit: "cover" }}
				/>
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-4xl font-bold">Svatební focení</h1>
				</div>
				<Image
					src="/portfolio/10.png"
					alt="Wedding Photo 2"
					width="300"
					height="400"
					style={{ aspectRatio: "300/400", objectFit: "cover" }}
				/>
			</section>
			<section className="grid grid-cols-3 gap-8 text-center">
				{prices["wedding"].items.map((item, index) => (
					<Card
						key={item.title}
						className={cn(
							"flex flex-col gap-4 p-3 w-[350px] border-none shadow-none",
							index % 2 === 0 && "mt-80 bg-slate-50",
							index % 2 === 1 && "mb-auto bg-slate-200"
						)}
					>
						<CardHeader className="text-xl font-bold">
							<CardTitle>{item.title}</CardTitle>
						</CardHeader>
						<CardContent className="list-inside list-none">
							{item.list.map((listItem) => (
								<li key={listItem} className="">
									{listItem}
								</li>
							))}
						</CardContent>
						<CardDescription className="text-sm">
							{item.description}
						</CardDescription>
						<CardFooter className="text-2xl font-bold self-center">
							<span>Cena {item.price}</span>
						</CardFooter>
					</Card>
				))}
			</section>
			<section className="text-center">
				<Title>Další focení</Title>
				<div className="grid grid-cols-1 gap-8 mt-8">
					{prices["next"].items.map((item, index) => (
						<div
							key={item.title}
							className={cn(
								"flex items-center",
								index % 2 === 0 && "justify-end"
							)}
						>
							{index % 2 === 0 && (
								<div className="text-right max-w-screen-sm">
									<p>{item.description}</p>
									<p>Cena {item.price}</p>
								</div>
							)}
							<Image
								src="/portfolio/10.png"
								alt="Family Photo"
								className="ml-8 mr-8"
								width="200"
								height="300"
								style={{ aspectRatio: "200/300", objectFit: "cover" }}
							/>
							{index % 2 === 1 && (
								<div className="text-left">
									<p>{item.description}</p>
									<p>Cena {item.price}</p>
								</div>
							)}
						</div>
					))}
				</div>
				<p className="text-red-500 mt-4">
					Nenašli jste co jste hledali? Pojďme se spolu domluvit na jiném
					focení! kontaktujte mě!
				</p>
			</section>
			<section className="text-center">
				<Title>
					Co si o mně
					<br />
					myslí klienti?
				</Title>
				<Carousel
					className="w-full max-w-4xl mx-auto"
					opts={{ align: "center", loop: true }}
				>
					<CarouselContent>
						{reviews.map((item, index) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<div className="flex justify-around mt-8">
										<Image
											src={item.img}
											alt="Client Photo 1"
											width="200"
											height="300"
											style={{ aspectRatio: "200/300", objectFit: "cover" }}
										/>
									</div>
									<p className="mt-4">{item.text}</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
		</main>
	);
};
