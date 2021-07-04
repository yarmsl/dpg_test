import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		marginBottom: '38px'
	}
}));

const Phone = () => {

	const classes = useStyles();
	const methods = useFormContext();

	useEffect(() => {
		if (methods.watch('Phone')?.length > 0) {
			methods.trigger('Phone');
		}
	}, [methods.watch('Phone')]);

	return (
		<Controller
			name="Phone"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					inputProps={{
						inputMode: 'decimal',
					}}
					className={classes.root}
					label='Phone'
					type="tel"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={onChange}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{
				pattern: {
					value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
					message: 'Incorrect phone number'
				}
			}}
		/>
	);
};

export default Phone;