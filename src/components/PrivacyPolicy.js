import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, Checkbox, Link, makeStyles, Typography } from '@material-ui/core';
import CheckedIcon from '../UI/icons/CheckedIcon';
import EmptyIcon from '../UI/icons/EmptyIcon';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		marginBottom: '30px'
	},
	link: {
		cursor: 'pointer',
		margin: '0 4px',
		fontWeight: 400
	}
}));

const PrivacyPolicy = () => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Box className={classes.root}>
			<Controller
				name='policy'
				control={methods.control}
				defaultValue={false}
				render={({ field: { onChange, value } }) => (
					<Checkbox
						icon={<EmptyIcon fontSize='large' viewBox='0 0 31 31' />}
						checkedIcon={<CheckedIcon fontSize='large' viewBox='0 0 31 31' />}
						checked={value}
						onChange={(e) => onChange(e.target.checked)}
					/>
				)}
			/>
			<Typography variant='body2' color='textSecondary'>
				I accept
			</Typography>
			<Link className={classes.link} color='textSecondary'>Terms and Privacy Policy</Link>
		</Box>
	);
};

export default PrivacyPolicy;
