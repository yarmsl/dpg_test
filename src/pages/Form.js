import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Name from '../components/Name';
import Company from '../components/Company';
import Email from '../components/Email';
import Phone from '../components/Phone';
import Subject from '../components/Subject';
import Message from '../components/Message';
import PrivacyPolicy from '../components/PrivacyPolicy';

const useStyles = makeStyles((theme) => ({
	header: {
		marginTop: '30px',
		marginBottom: '25px',
	},
	form: {
		width: '389px',
		padding: '41px 45px',
		marginBottom: '30px',
		backgroundColor: theme.palette.background.default,
		borderRadius: theme.shape.borderRadius,
		boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.7)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	title: {
		padding: '0 30px',
		textAlign: 'center'
	},
	text: {
		margin: '10px 0',
	}
}));

const Form = () => {
	const [disabled, setDisabled] = useState(true);
	const methods = useForm();
	const classes = useStyles();
	const onSubmit = data => {
		console.log(data);
	};

	useEffect(() => {
		setDisabled(!methods.watch('policy'));
	}, [methods.watch('policy')]);

	return (
		<>
			<Typography className={classes.header} variant='h1'>Hello</Typography>
			<FormProvider {...methods} >
				<Box component='form' className={classes.form} onSubmit={methods.handleSubmit(onSubmit)}>
					<Typography className={classes.title} variant='body1'>
						For business enquiries please use the form below
					</Typography>
					<Typography className={classes.text} variant='body2' color='textSecondary'>
						*Required
					</Typography>
					<Name />
					<Company />
					<Email />
					<Phone />
					<Subject />
					<Message />
					<PrivacyPolicy />
					<Button disabled={disabled} type='submit' variant='contained' color='primary'>Send</Button>
				</Box>
			</FormProvider>
		</>
	);
};

export default Form;
