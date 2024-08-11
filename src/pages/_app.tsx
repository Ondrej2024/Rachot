import "@/styles/globals.css";
import { Playfair_Display as FontSans } from "next/font/google";
import type { AppProps } from "next/app";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/Layout";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component
				{...pageProps}
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			/>
		</Layout>
	);
}
