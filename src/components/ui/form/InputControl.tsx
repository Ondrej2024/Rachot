import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { Input, InputProps } from "../input";
import { FormFieldControl, FormFieldControlProps } from "./FormFieldControl";

type Props<T extends FieldValues> = Omit<
	InputProps,
	"value" | "ref" | "onChange" | "onBlur" | "name" | "defaultValue"
> &
	Omit<
		FormFieldControlProps<T>,
		| "children"
		| "classNameFormDescription"
		| "classNameFormLabel"
		| "classNameFormMessage"
	>;

export const InputControl = <T extends FieldValues>({
	id,
	control,
	name,
	label,
	description,
	disabled,
	compoundBefore,
	compoundAfter,
	classNameField,
	className,
	...inputProps
}: Props<T>): ReactNode => {
	return (
		<FormFieldControl
			control={control}
			name={name}
			description={description}
			label={label}
			compoundBefore={compoundBefore}
			compoundAfter={compoundAfter}
			classNameField={classNameField}
		>
			{({ field }) => (
				<Input
					{...inputProps}
					value={field.value}
					ref={field.ref}
					onChange={field.onChange}
					onBlur={field.onBlur}
					disabled={disabled || field.disabled}
					name={field.name}
					id={id || name}
					multiple
					className={cn(
						!field.value &&
							inputProps.type === "file" &&
							"text-stone-500 dark:text-stone-400",
						className
					)}
				/>
			)}
		</FormFieldControl>
	);
};
