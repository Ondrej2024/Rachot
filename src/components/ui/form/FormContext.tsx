import { zodResolver } from "@hookform/resolvers/zod";
import {
	type FormEvent,
	type ForwardedRef,
	forwardRef,
	ReactNode,
	useImperativeHandle,
} from "react";
import {
	Control,
	DefaultValues,
	useForm,
	type UseFormReturn,
} from "react-hook-form";
import { z } from "zod";
import { Form } from "../form";

type Props<T extends z.ZodObject<z.ZodRawShape>> = {
	schema: T;
	defaultValues: DefaultValues<z.TypeOf<T>>;
	onSubmit?: (data: z.infer<T>) => void;
	children: (control: Control<z.TypeOf<T>, unknown>) => ReactNode;
	mode?: "onBlur" | undefined;
};

export type FormContextRef<T extends z.ZodObject<z.ZodRawShape>> =
	UseFormReturn<z.TypeOf<T>>;

// this is needed for nested forms(for example dialog inside of some form creates nested form), withoud this it would submit the parent form as well
const stopPropagate = (callback: () => void) => {
	return (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		callback();
	};
};

// eslint-disable-next-line react/display-name
export const FormContext = forwardRef(
	<T extends z.ZodObject<z.ZodRawShape>>(
		{ defaultValues, schema, onSubmit, children, mode }: Props<T>,
		ref: ForwardedRef<FormContextRef<T>>
	): ReactNode => {
		const form = useForm<z.infer<typeof schema>>({
			defaultValues,
			resolver: zodResolver(schema),
			mode,
		});

		useImperativeHandle(ref, () => form, [form]);

		return (
			<Form {...form}>
				<form onSubmit={onSubmit && stopPropagate(form.handleSubmit(onSubmit))}>
					{children(form.control)}
				</form>
			</Form>
		);
	}
) as <T extends z.ZodObject<z.ZodRawShape>>(
	props: Props<T> & { ref?: { current: FormContextRef<T> | null } }
) => JSX.Element;
