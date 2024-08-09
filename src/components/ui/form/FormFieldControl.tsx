import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Control, ControllerProps, FieldValues, Path } from "react-hook-form";
import {
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../form";

export type FormFieldControlProps<T extends FieldValues> = {
	control: Control<T>;
	name: Path<T>;
	label?: ReactNode;
	description?: ReactNode;
	classNameField?: string;
	classNameFormMessage?: string;
	classNameFormLabel?: string;
	classNameFormDescription?: string;
	compoundBefore?: ReactNode;
	compoundAfter?: ReactNode;
	children: ControllerProps<T, Path<T>>["render"];
};

export const FormFieldControl = <T extends FieldValues>({
	control,
	name,
	label,
	description,
	classNameField,
	classNameFormMessage,
	classNameFormLabel,
	classNameFormDescription,
	compoundBefore,
	compoundAfter,
	children,
}: FormFieldControlProps<T>): ReactNode => {
	return (
		<FormField
			control={control}
			name={name}
			render={(props) => (
				<FormItem className={cn(classNameField)}>
					{label && (
						<FormLabel
							htmlFor={props.field.name}
							className={cn("mb-1", classNameFormLabel)}
						>
							{label}
						</FormLabel>
					)}
					<div className="flex gap-2">
						{compoundBefore}
						{children(props)}
						{compoundAfter}
					</div>
					{description && (
						<FormDescription className={cn("mt-1", classNameFormDescription)}>
							{description}
						</FormDescription>
					)}
					<FormMessage className={cn("mt-1", classNameFormMessage)} />
				</FormItem>
			)}
		/>
	);
};
