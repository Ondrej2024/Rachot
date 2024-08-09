import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { Checkbox } from "../checkbox";
import { Label } from "../label";
import { FormFieldControl, FormFieldControlProps } from "./FormFieldControl";
import { cn } from "@/lib/utils";

type Props<T extends FieldValues> = { labelOffset?: boolean } & Omit<
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
	"value" | "ref" | "onChange" | "onBlur" | "name" | "defaultValue"
> &
	Omit<
		FormFieldControlProps<T>,
		| "children"
		| "classNameFormDescription"
		| "classNameFormLabel"
		| "classNameFormMessage"
		| "compoundBefore"
		| "compoundAfter"
	>;

export const CheckboxControl = <T extends FieldValues>({
	id,
	control,
	name,
	label,
	description,
	disabled,
	classNameField,
	labelOffset,
	...checkboxProps
}: Props<T>): ReactNode => {
	return (
		<FormFieldControl
			control={control}
			name={name}
			description={description}
			classNameField={classNameField}
		>
			{({ field }) => (
				<Label
					className={cn(
						"flex gap-2 items-center font-normal",
						labelOffset && "h-9 mt-5"
					)}
				>
					<Checkbox
						{...checkboxProps}
						className="text-sm font-normal"
						ref={field.ref}
						id={id}
						checked={
							Array.isArray(field.value)
								? field.value?.includes(id)
								: field.value
						}
						onCheckedChange={(checked) => {
							return Array.isArray(field.value)
								? checked
									? field.onChange([...field.value, id])
									: field.onChange(
											field.value?.filter((value: string) => value !== id)
									  )
								: field.onChange(checked);
						}}
						disabled={disabled || field.disabled}
						name={field.name}
					/>
					{label}
				</Label>
			)}
		</FormFieldControl>
	);
};
