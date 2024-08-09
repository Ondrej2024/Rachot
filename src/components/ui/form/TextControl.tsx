import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';
import { Textarea, type TextareaProps } from '../textarea';
import { FormFieldControl, FormFieldControlProps } from './FormFieldControl';

type Props<T extends FieldValues> = Omit<TextareaProps, 'value' | 'ref' | 'onChange' | 'onBlur' | 'name' | 'defaultValue'> &
	Omit<FormFieldControlProps<T>, 'children' | 'classNameFormDescription' | 'classNameFormLabel' | 'classNameFormMessage'>;

export const TextControl = <T extends FieldValues>({
	control,
	name,
	label,
	description,
	disabled,
	rows = 3,
	compoundBefore,
	compoundAfter,
	classNameField,
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
				<Textarea
					{...inputProps}
					value={field.value ?? ''}
					ref={field.ref}
					onChange={field.onChange}
					onBlur={field.onBlur}
					disabled={disabled || field.disabled}
					name={field.name}
					rows={rows}
				/>
			)}
		</FormFieldControl>
	);
};
