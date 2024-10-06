import { FC, type ReactNode } from "react";

type Props = { children: ReactNode };

export const Title: FC<Props> = ({ children }) => {
	return (
		<h2 className="text-2xl font-bold relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[40%] before:h-[2px] before:bg-primary before:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[40%] after:h-[2px] after:bg-primary after:content-['']">
			{children}
		</h2>
	);
};
