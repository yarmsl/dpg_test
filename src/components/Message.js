import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';


const useStyles = makeStyles(() => ({
	root: {
		marginBottom: '30px'
	}
}));

const Message = () => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Controller
			name="Message"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					className={classes.root}
					label='Message*'
					multiline
					rows='2'
					rowsMax='2'
					type="text"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={onChange}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{ required: 'Enter your message' }}
		/>
	);
};

export default Message;