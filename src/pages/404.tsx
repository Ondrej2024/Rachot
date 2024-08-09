import Link from "next/link";
import { FC } from "react";

type Props = {};

const Error: FC<Props> = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-4 p-4">
				<h1 className="text-2xl font-bold">404</h1>
				<p className="text-sm text-gray-400">
					Tu nic njeje. Zkuste se vrátit na{" "}
					<Link
						href="/"
						className="underline text-blue-400 hover:text-blue-500"
					>
						úvodní stránku
					</Link>
					.
				</p>
			</div>
		</>
	);
};

export default Error;
