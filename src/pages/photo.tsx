import Image from "next/image";
import { FC, useState } from "react";
import Masonry from "react-masonry-css";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

type Props = {};

const images = require.context("../../public/portfolio/", true);
const imageList = (
	images
		.keys()
		.map((image) => images(image))
		.map((image) => image.default) as {
		blurDataURL: string;
		blurHeight: number;
		blurWidth: number;
		height: number;
		src: string;
		width: number;
	}[]
).sort((a, b) =>
	a.src.split("/").pop()!.localeCompare(b.src.split("/").pop()!)
);

const Photo: FC<Props> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};

	const openLightbox = (index: number) => {
		setPhotoIndex(index);
		setIsOpen(true);
	};

	return (
		<>
			<Masonry breakpointCols={breakpointColumnsObj} className="flex w-auto">
				{imageList.map((image, index) => (
					<div
						key={index}
						className="group relative p-2 cursor-pointer"
						onClick={() => openLightbox(index)}
					>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<Image
							src={image.src}
							alt="Photo"
							objectFit="cover"
							width={image.width}
							height={image.height}
							className="transition-transform transform group-hover:scale-105"
						/>
					</div>
				))}
			</Masonry>

			{isOpen && (
				<Lightbox
					slides={imageList.map((image) => ({
						src: image.src,
					}))}
					close={() => setIsOpen(false)}
					index={photoIndex}
					open={isOpen}
				/>
			)}
		</>
	);
};

export default Photo;
