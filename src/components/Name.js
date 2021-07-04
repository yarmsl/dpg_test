import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';
import { capitalFirstLetter } from '../lib/services';

const useStyles = makeStyles(() => ({
	root: {
		marginBottom: '38px'
	}
}));

const Name = () => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Controller
			name="Name"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					className={classes.root}
					label='Name*'
					type="text"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={e => onChange(capitalFirstLetter(e))}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{ required: 'Enter your name' }}
		/>
	);
};

export default Name;
