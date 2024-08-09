import { FC, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
	children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center gap-4 p-4">
				{children}
			</div>
			<Footer />
		</>
	);
};
