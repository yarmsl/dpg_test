import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		marginBottom: '38px',
	}
}));


const Email = () => {

	const classes = useStyles();
	const methods = useFormContext();

	useEffect(() => {
		if (methods.watch('email')?.length > 0) {
			methods.trigger('email');
		}
	}, [methods.watch('email')]);

	return (
		<Controller
			name="email"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
				<TextField
					className={classes.root}
					label='Email*'
					type="email"
					fullWidth
					autoComplete="on"
					value={value}
					onBlur={onBlur}
					onChange={e => onChange(e.target.value.toLowerCase())}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{
				required: 'Enter your Email',
				pattern: {
					value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					message: 'Invalid email address'
				}
			}}
		/>
	);
};

export default Email;