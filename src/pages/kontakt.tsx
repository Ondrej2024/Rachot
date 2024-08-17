import { ContactForm } from "@/components/ContactForm";
import { FC } from "react";

type Props = {};

const Contact: FC<Props> = () => {
	return (
		<>
			<h1 className="text-3xl font-bold">Kontaktujte mě!</h1>
			<ul>
				<li>
					<a href="mailto:hajanskyfotograf@seznam.cz">hajanskyfotograf@seznam.cz</a>
				</li>
				<li>
					<a href="tel:+420604701507">+420 604 701 507</a>
				</li>
			</ul>
			<ContactForm />
		</>
	);
};

export default Contact;
