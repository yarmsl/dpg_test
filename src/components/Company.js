import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		marginBottom: '38px'
	}
}));

const Company = () => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Controller
			name="Company"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					className={classes.root}
					label='Company*'
					type="text"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={onChange}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{ required: 'Enter Company name' }}
		/>
	);
};

export default Company;