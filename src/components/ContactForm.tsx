import { FC } from "react";
import { Input } from "./ui/input";
import { FormContext } from "./ui/form/FormContext";
import { z } from "zod";
import { InputControl } from "./ui/form/InputControl";
import { DatepickerControl } from "./ui/form/DatepickerControl";
import { TextControl } from "./ui/form/TextControl";
import { Button } from "./ui/button";

type Props = {};

export const ContactForm: FC<Props> = () => {
	return (
		<>
			<FormContext
				schema={z.object({
					name: z.string().min(3),
					email: z.string().email(),
					phone: z.string(),
					date: z.union([z.string(), z.coerce.date()]),
					message: z.string(),
				})}
				defaultValues={{
					name: "",
					email: "",
					phone: "",
					date: "",
					message: "",
				}}
				onSubmit={(data) => {
					alert(JSON.stringify(data, null, 2));
				}}
			>
				{(control) => (
					<>
						<InputControl control={control} name="name" label="Jméno" />
						<InputControl control={control} name="email" label="Email" />
						<InputControl control={control} name="phone" label="Telefon" />
						<DatepickerControl
							control={control}
							name="date"
							label="Přibližný termín"
						/>
						<TextControl control={control} name="message" label="Zpráva" />
						<br />
						<Button type="submit">Odeslat</Button>
					</>
				)}
			</FormContext>
		</>
	);
};
