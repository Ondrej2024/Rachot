import { ReactNode, useState } from "react";
import { FieldValues } from "react-hook-form";
import { Calendar } from "../calendar";
import { FormControl } from "../form";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import {
	FormFieldControl,
	type FormFieldControlProps,
} from "./FormFieldControl";
import { cn } from "@/lib/utils";
import { formatDate } from "date-fns";

type Props<T extends FieldValues> = {
	id?: string;
	placeholder?: string;
} & Omit<
	FormFieldControlProps<T>,
	| "children"
	| "classNameFormDescription"
	| "classNameFormLabel"
	| "classNameFormMessage"
>;

export const DatepickerControl = <T extends FieldValues>({
	id,
	control,
	name,
	label,
	description,
	placeholder = "",
	classNameField,
	...props
}: Props<T>): ReactNode => {
	const [open, setOpen] = useState(false);

	return (
		<FormFieldControl
			control={control}
			name={name}
			description={description}
			label={label}
			classNameField={classNameField}
			{...props}
		>
			{({ field }) => {
				return (
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<button
									id={id || name}
									className={cn(
										"flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-stone-200 bg-white px-3 py-2 text-sm shadow-sm ring-offset-white focus:outline-none focus:ring-1 focus:ring-stone-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-stone-800 dark:ring-offset-stone-950 dark:focus:ring-stone-300 font-normal dark:bg-stone-950 cursor-default",
										!field.value && "text-stone-500 dark:text-stone-400"
									)}
								>
									{field.value
										? formatDate(field.value, "d. M. yyyy")
										: placeholder}
								</button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="p-0" align="start">
							<Calendar
								mode="single"
								defaultMonth={field.value}
								selected={field.value}
								onSelect={(day) => {
									field.onChange(day);
									setOpen(false);
								}}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				);
			}}
		</FormFieldControl>
	);
};
